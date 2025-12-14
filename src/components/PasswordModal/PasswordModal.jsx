import {useState} from "react";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import styles from "./PasswordModal.module.css";

const PasswordModal = ({onSuccess}) => {
  const [password, setPassword] = useState("");

  const SITE_PASSWORD = process.env.REACT_APP_PASSWORD;

  const handleSubmit = () => {
    if (password === SITE_PASSWORD) {
      onSuccess();
    } else {
      alert("Невірний пароль");
      setPassword("");
    }
  };

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

        <MyButton
          style={{
            width: "100%",
            justifyContent: "center",
            display: "inline-flex",
            marginTop: 10,
          }}
          onClick={handleSubmit}
        >
          Увійти
        </MyButton>
      </div>
    </div>
  );
};
export default PasswordModal;
