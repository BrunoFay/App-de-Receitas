import React from 'react';
import { useHistory } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import '../styles/Profile.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { clearStorage, getUser } from '../services/localStorage';

function Profile() {
  const history = useHistory();
  const { email } = getUser();

  return (
    <div className="profile-container">
      <Header title="Profile" />
      <main className="main-profile">

        <section className="buttons-profile">
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={() => history.push('/done-recipes')}
          >
            Done Recipes
          </button>
          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={() => history.push('/favorite-recipes')}
          >
            Favorite Recipes
          </button>

        </section>
        <section className="profile-infos">
          <button 
          className="settings-btn"
          onClick={()=> history.push('/settings')}
          >
            <FiSettings />
            </button>
          <AiOutlineUser className="profile-icons" />

          <p data-testid="profile-email">{email}</p>
        </section>
        <button
          className="logout-button"
          type="button"
          data-testid="profile-logout-btn"
          onClick={() => {
            clearStorage();
            history.push('/');
          }}
        >
          Logout
        </button>
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
