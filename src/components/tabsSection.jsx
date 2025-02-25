import Button from "./buttons/Button";
import { useState } from "react";

export default function TabsSection({ active, onChange }) {
  return (
    <section>
      {/* Условное присваивание класса активности */}
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Head page
      </Button>
      <Button
        isActive={active === "feedback"}
        onClick={() => onChange("feedback")}
      >
        Remove page
      </Button>
      <Button
        isActive={active === "effect"}
        onClick={() => onChange("effect")}
      >
       Effect
      </Button>
    </section>
  );
}
