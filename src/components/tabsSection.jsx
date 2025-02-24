import Button from "./buttons/Button";
import { useState } from "react"; // Подключаем useState для управления состоянием

export default function TabsSection() {
  // Состояние для активной вкладки
  const [active, setActive] = useState("main");

  // Функция для смены вкладки
  const onChange = (tab) => {
    setActive(tab); // Устанавливаем новую активную вкладку
  };

  return (
    <section>
      {/* Условное присваивание класса активности */}
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Head page
      </Button>
      <Button isActive={active === "feedback"} onClick={() => onChange("feedback")}>
        Remove contact
      </Button>
    </section>
  );
}
