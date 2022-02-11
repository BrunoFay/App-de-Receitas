import React,{ useState } from 'react'
import ColorContext from './ColorContext'

const INITIAL_STATE = {
  colorHeadAndFooter: '#f74247',
  colorCards: '#f9f7f5',
  colorBgFilters: '#f39e7d',
  colorFilters: '#333472',
  colorBody: '#ededed',
  colorDetails: '#242424',
};
export default function ColorProvider({ children }) {
  const [colorApp, setColorsApp] = useState(INITIAL_STATE)
 
  const contextValue={
    colorApp,
    setColorsApp,
  }
  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  )
}
