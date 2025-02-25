import Header from "./components/header/Header.jsx";
import GetSection from "./components/section";
import GetSectionTwo from "./components/GetSectionTwo";
import IntroSection from "./components/introSection";
import TabsSection from "./components/tabsSection";
import FeedBackSection from "./components/feedBackSection";
import { useState } from "react";
import EffectSection from "./components/EffectSection.jsx";

function App() {
  const [tab, setTab] = useState("effect");

  return (
    <div>
      <Header />

      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(curent) => setTab(curent)} />

        {tab === "main" && (
          <>
            <GetSection />
            <GetSectionTwo />
          </>
        )}
        {tab === "feedback" && <FeedBackSection />}

        {tab === "effect" && <EffectSection/>}
      </main>
    </div>
  );
}
       

export default App;
