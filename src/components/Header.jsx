
// создаем функцию которая возвращает header

export default function Header(){
    //Получаем время
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes()
    const getFullTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
    
    return (
      <header>
      <h3>First lesson on React</h3>
      <span>Start 23.02.25</span>
      <span>Time now :{getFullTime}</span>
      </header>
    )
  }
  