import Header from "./components/Header";
import GetSection from "./components/section";
import GetSectionTwo from "./components/GetSectionTwo";
import IntroSection from "./components/introSection";
import TabsSection from "./components/tabsSection";
import FeedBackSection from "./components/feedBackSection";
import { useState } from "react";


function App() {
  const [tab , setTab]  = useState("feedback")

  return (
    <div>
      <Header />
      
      <main>
        <IntroSection/>
        <TabsSection active ={tab} onChange={(curent) => setTab(curent)}/>
         
         {/* Если tab === "main", рендерим два компонента */}
         {tab === "main" && (
          <>
            <GetSection />
            <GetSectionTwo />
          </>
        )}
       {tab === "feedback" &&  <FeedBackSection/>}

      
      </main>
    </div>
  );
}

export default App;
