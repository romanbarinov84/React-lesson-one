import styles from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  return (
    <button className={`${styles.button} ${isActive ? styles.active : ""}`} {...props}>
      {children}
    </button>
  );
}
