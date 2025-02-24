import Button from "../components/buttons/Button";
import { differences } from "../data";
import { useState } from "react"; // Хук для управления состоянием компонента

export default function GetSectionTwo(){
    const [content, setContent] = useState("Push the Button");
 function buttonClick(type) {
    setContent(type);
  }
    let tabContent = "Push the Button"
    return(
        <section>
        <h3>В JSX всё работает так же, как и в обычном HTML.</h3>
        
        <Button onClick={() => buttonClick("way")}>Click</Button>
        <Button onClick={() => buttonClick("easy")}>Push</Button>
        <Button onClick={() => buttonClick("program")}>Remove</Button>
        
       
        {/*  начальный текст, если content пустой, иначе отображаем значение из differences */}
        
        {content ? (
          <p>
            <strong>{differences[content]}</strong>
          </p>
        ) : (
          <p>Push the Button</p>
        )}
        {tabContent}
      </section>
    )
}