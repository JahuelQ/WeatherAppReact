import React from 'react'

//CSS
import './App.css'

//Components
import WeatherApp from './Components/WeatherApp/WeatherApp'
import Header from './Components/Header/Header.jsx'

//Services
import { WeatherProvider } from './Services/WeatherContext.jsx'


const App = () => {

  return (
    <>
    <WeatherProvider>
      <Header />
      <WeatherApp />
    </WeatherProvider>
    </>
  );
}

export default App