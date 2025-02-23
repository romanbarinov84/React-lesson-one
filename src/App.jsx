import Header from "./components/Header";
import { ways } from "./data";
import ChangeText from "./components/ChangeText";
import Button from "./components/buttons/Button";

function App() {
  function buttonClick(){

  }
  return (
    <div>
      <Header />
      <main>
        <section>
          <h1>Hello React!!!</h1>

          <p>JavaScript-библиотека для создания пользовательских интерфейсов</p>
          <ul>
            {/*<ChangeText{...ways[0]}/>----- это короткая запись того что ниже*/}
            <ChangeText
              title={ways[0].title}
              description={ways[0].description}
            />
            {/*<ChangeText{...ways[1]}/>----- это короткая запись того что ниже*/}
            <ChangeText
              title={ways[1].title}
              description={ways[1].description}
            />
            {/*<ChangeText{...ways[2]}/>----- это короткая запись того что ниже*/}
            <ChangeText
              title={ways[2].title}
              description={ways[2].description}
            />
            {/*<ChangeText{...ways[3]}/>----- это короткая запись того что ниже*/}
            <ChangeText
              title={ways[3].title}
              description={ways[3].description}
            />
          </ul>
        </section>
        <section>
          <h3>
          В JSX всё работает так же, как и в обычном HTML.
          </h3>
        <Button onClick={() => buttonClick("way")}>Click</Button>
        <Button onClick={() => buttonClick("easy")}>Push</Button>
        <Button onClick={() => buttonClick("program")}>Remove</Button>
        </section>
      </main>
    </div>
  );
}

export default App;
