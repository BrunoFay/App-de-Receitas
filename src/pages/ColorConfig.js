import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';


const INITIAL_STATE = {
  colorHeadAndFooter: '',
  colorCards: '',
  colorBgFilters: '',
  colorFilters: '',
  colorBody: '',
  colorDetails: '',
  colorHeaderAndFooterIcons: '',
};
export default function ColorConfig() {
  const [colorApp, setColorsApp] = useState(INITIAL_STATE)
  const {
    colorHeadAndFooter,
    colorCards,
    colorBgFilters,
    colorFilters,
    colorBody,
    colorDetails,
    colorHeaderAndFooterIcons, } = INITIAL_STATE;
  const history = useHistory()


  function changeColor(name, value) {
    const options = {
      colorHeadAndFooter: '--bgcolorHeadAndFooter',
      colorCards: '--bgcolorCardsAndFilters',
      colorBgFilters: '--bgcolorFilters',
      colorFilters: '--colorFilters',
      colorBody: '--bgcolorBody',
      colorDetails: '--colorBlackDetailsPage',
      colorHeaderAndFooterIcons: '--colorIcons',
    }
    document.body.style.setProperty(`${options[name]}`, `${value}`);
  }


  function handleInputChange({ target: { name, value } }) {
    setColorsApp({ ...colorApp, [name]: value });
    changeColor(name, value)
  }
  return (
    <main className="main-colorConfig">
      <h1> ColorConfig </h1>
      <form onSubmit={() => history.push('/profile')}>
        <label>
          Header and Footer BackGround
          <input
            name='colorHeadAndFooter'
            value={colorHeadAndFooter}
            type='color'
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Header and Footer icons
          <input
            name='colorHeaderAndFooterIcons'
            value={colorHeaderAndFooterIcons}
            type='color'
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Cards
          <input
            name='colorCards'
            value={colorCards}
            type='color'
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Buttons filters
          <input
            name='colorBgFilters'
            value={colorBgFilters}
            type='color'
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Body Color
          <input
            name='colorBody'
            value={colorBody}
            type='color'
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Text Details
          <input
            name='colorDetails'
            value={colorDetails}
            type='color'
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <label>
          Text Filters and Card Title
          <input
            name='colorFilters'
            value={colorFilters}
            type='color'
            onChange={(e) => handleInputChange(e)}
          />
        </label>
        <button>Edit</button>
      </form>
    </main>
  )
}
