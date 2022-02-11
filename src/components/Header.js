import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AiOutlineUser } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import SearchBar from './SearchBar';
import '../styles/Header.css';

export default function Header({ title, hasSearchButton }) {
  const [isSearchInputVisible, setIsSearchInputVisible] = useState(false);
  const history = useHistory();

  return (
    <header>
      {
        hasSearchButton ? (

          <button
            type="button"
            onClick={ () => setIsSearchInputVisible(!isSearchInputVisible) }
          >
            <BsSearch className="header-icons" />
          </button>
        ) : <FaArrowLeft
          className="backArrow-header"
          onClick={ () => history.goBack() }
        />
      }

      <span className="page-title">{title}</span>

      <button
        type="button"
        title="Profile"
        onClick={ () => history.push('/profile') }
      >
        <AiOutlineUser className="header-icons" />
      </button>

      {isSearchInputVisible && <SearchBar />}

    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  hasSearchButton: PropTypes.bool,
}.isRequired;
