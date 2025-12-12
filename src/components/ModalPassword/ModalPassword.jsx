import {useState} from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import styles from "./ModalPassword.module.css";

const ModalPassword = ({isOpen, onSubmit}) => {
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Введіть пароль для доступу</h2>

        <MyInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <MyButton onClick={() => onSubmit(password)}>Увійти</MyButton>
      </div>
    </div>
  );
};

export default ModalPassword;
