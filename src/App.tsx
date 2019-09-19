import React from 'react';
import './App.css';
import { add } from './ui/screen/demo1/index'
import { User } from './ui/screen/types';
import ProfileComponent from './ui/screen/profile/'

const App: React.FC = () => {
  const demoClient: User = {
    email: 'demo@trainerize.com',
    firstName: 'clientFN',
    lastName: 'clientLN',
    type: 'client',
    userID: 12345,
    role: 'client',
  }
  // const demoTrainer: User = {
  //   email: 'demo@trainerize.com',
  //   firstName: 'trainerFN',
  //   lastName: 'trainerLN',
  //   type: 'trainer',
  //   phone: '778-888-9998',
  //   role: 'admin',
  //   userID: 54321,
  // }
  return (
    <div className="App">
      <header className="App-header">
        DEMO Page
      </header>

      <div>
        <h3>Add Example:</h3>
        <p>{add(2000, 19)}</p>
      </div>

      <ProfileComponent user={demoClient}/>
    </div>
  );
}

export default App;
