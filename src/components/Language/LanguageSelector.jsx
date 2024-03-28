import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';


function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select onChange={changeLanguage} value={i18n.language}>
      <option value="en">ENG</option>
      <option value="ru">РУС</option>
      <option value="kk">ҚАЗ</option>
    </select>
  );
}

export default LanguageSelector;
