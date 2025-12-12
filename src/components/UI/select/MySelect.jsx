import styles from "./MySelect.module.css";

const MySelect = ({options, defaultValue, value, onChange}) => {
  return (
    <div className={styles.selectWrapper}>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.mySelect}
      >
        <option disabled value="">
          {defaultValue}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MySelect;
