import { useState , useEffect } from 'react';
import logo from '/vite.svg'
import "./Header.css";
import {styled} from "styled-components"

// заключаем стили для хедера в константу и используем ее
 const HeaderContainer = styled.header`
    height: 80px;
    display: flex;
    padding: 0 2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #f8f5f5;
    background: #fcf9f9;
    box-shadow: 1px 2px 1px 1px white;
`

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
      <HeaderContainer>
        <img src={logo} alt={"logo"} />
      <h3>First lesson on React</h3>
      <span>Start 23.02.25</span>
      <span>Time now :{getFullTime}</span>
      </HeaderContainer>
    )
  }
  