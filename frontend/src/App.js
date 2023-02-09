import React from 'react'
import './App.css';
import Formm from './components/Formm'
import ProfilePic from './components/ProfilePic';
import FullName from './components/FullName';
import Adresse from './components/Adresse';

function App() {
  return (
    <div>
      <Formm/>
      <ProfilePic/>
      <FullName/>
      <Adresse/>
    </div>
    
  );
}

export default App;
