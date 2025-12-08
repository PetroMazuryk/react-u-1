import css from "./MyButton.module.css";

const MyButton = ({variant = "create", children, ...props}) => {
  return (
    <button {...props} className={`${css.myBtn} ${css[variant]}`}>
      {children}
    </button>
  );
};

export default MyButton;
