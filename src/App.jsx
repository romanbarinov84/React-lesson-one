import Header from "./components/Header";
import GetSection from "./components/section";
import GetSectionTwo from "./components/GetSectionTwo";
import IntroSection from "./components/introSection";


function App() {
  return (
    <div>
      <Header />
      
      <main>
        <IntroSection/>
        <GetSection />
        <GetSectionTwo />
      </main>
    </div>
  );
}

export default App;
