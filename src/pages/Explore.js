import React from 'react';
import { useHistory } from 'react-router-dom';
import { GiChefToque } from 'react-icons/gi';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Explore() {
  const history = useHistory();

  return (
    <main className="main-explore">

      <Header title="Explore" />
      <div className="explore-buttons">
        <button
          type="button"
          data-testid="explore-foods"
          onClick={ () => history.push('/explore/foods') }
        >
          Explore Foods
        </button>
        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => history.push('/explore/drinks') }
        >
          Explore Drinks
        </button>
      </div>
      <GiChefToque className="logo-explore" />
      <Footer />
    </main>
  );
}
