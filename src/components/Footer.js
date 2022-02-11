import React from 'react';
import { useHistory } from 'react-router-dom';
import { BiDrink } from 'react-icons/bi';
import { VscCompass } from 'react-icons/vsc';
import { GiMeal } from 'react-icons/gi';
import '../styles/footer.css';

export default function Footer() {
  const history = useHistory();

  return (
    <footer data-testid="footer">
      <button
        type="button"
        title="Drinks"
        onClick={ () => history.push('/drinks') }
      >
        <BiDrink className="footer-icon" />
      </button>

      <button
        type="button"
        onClick={ () => history.push('/explore') }
      >
        <VscCompass className="footer-icon" />
      </button>

      <button
        type="button"
        onClick={ () => history.push('/foods') }
      >
        <GiMeal className="footer-icon" />
      </button>
    </footer>
  );
}
