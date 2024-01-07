import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react'

function App() {
  const [users, setUsers] = useState([]);

  const addUsersHandler = (newUser) => {
    setUsers(prevState => {
      return [...prevState, { ...newUser, id: Math.random().toString() }]
    })
  }
  return (
    <div>
      <AddUser onAdd={addUsersHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
