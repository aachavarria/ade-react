import React from 'react'
import PersonaPage from './persona/personaPage';
require('../styles/app.scss');

export default class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Change me 3</h1>
        <PersonaPage/>
      </div>
    )
  }
}
