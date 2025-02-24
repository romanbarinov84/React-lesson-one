import { useState , useEffect } from 'react';
import logo from '/vite.svg'

// создаем функцию которая возвращает header
export default function Header(){
   //Получаем время
  const [now , setNow] = useState(new Date())
   //Щчищаем от лишних интервалов
    useEffect(() => {
     const interval = setInterval(() => setNow(new Date()), 30000);
     return () => clearInterval(interval)
    }, []);
    
     
    const hours = now.getHours();
    const minutes = now.getMinutes()
    const getFullTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    return (
      <header>
        <img src={logo} alt={"logo"} />
      <h3>First lesson on React</h3>
      <span>Start 23.02.25</span>
      <span>Time now :{getFullTime}</span>
      </header>
    )
  }
  