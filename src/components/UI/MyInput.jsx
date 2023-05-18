import React from 'react';
import css from './MyInput.module.css';

const MyInput = props => {
  return <input className={css.myInput} {...props} />;
};
export default MyInput;
