import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreateExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import Navigation from './components/Navigation';
import { useState } from 'react';


function App() {

  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header>
          <h1>Exercise Tracker for Slackers</h1>
          <p>Use this site to create, edit, or delete whatever exercise you wish to bequeath.</p>
        </header>
        <Navigation />
        <main>
          <Route path="/" exact><HomePage setExerciseToEdit = {setExerciseToEdit} /></Route>
          <Route path="/create-exercise"><CreateExercisePage /></Route>
          <Route path="/edit-exercise"><EditExercisePage exerciseToEdit = {exerciseToEdit} /></Route>
        </main>
        <footer>
          <p>&copy; 2022 Dominic Chavez</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;