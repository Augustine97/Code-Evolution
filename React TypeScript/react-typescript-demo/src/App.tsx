import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];
  return (
    <div className='App'>
      <Greet
        name='Augustine'
        /* messageCount={10} */
        isLoggedIn={true}
      />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>PlaceHolder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo !!</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('clicked', event, id);
        }}
      />
      <Input handleChange={(event) => console.log(event)} value='' />
    </div>
  );
}

export default App;
