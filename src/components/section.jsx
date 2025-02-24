import ChangeText from "./ChangeText"
import { ways } from "../data"


export default function GetSection(){
    return(
        <section>
                  <h1>Hello React!!!</h1>
        
                  <p>JavaScript-библиотека для создания пользовательских интерфейсов</p>
                  <ul>
                    
                    {ways.map(way => <ChangeText key = {way.title} {...way} />)}
                    
                
                  </ul>
                </section>
    )
}

