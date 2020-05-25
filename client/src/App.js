import React from 'react';
import './App.css';
import Home from './containers/Home';
import NavBar from './containers/NavBar';
import ViewPet from './components/ViewPet';
import UpdatePet from './components/UpdatePet';
import NewPet from './components/NewPet';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router } from '@reach/router';



function App() {
  return (
    <div>
      <NavBar />
      <Router>
        <NewPet path='/new' />
        <Home path='/' />
        <ViewPet path='/pets/:id' />
        <ViewPet path='/' />
        <UpdatePet path='/pets/:id/edit' />
      </Router>
    </div>
  );
}

export default App;