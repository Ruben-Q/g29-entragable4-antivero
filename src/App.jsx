
import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import FormUser from './components/formUsers'
import UserCard from './components/UserCard'


function App() {
  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)


  const baseUrl = "https://users-crud.academlo.tech"
  const [ users, getUsers, createUser, deleteUsers, updateUsers ] = useFetch(baseUrl, setCloseForm) //
  
  useEffect(() => {
    getUsers("/users")
    
  }, [])

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <div>
  <button onClick={handleOpenForm} className='formUser-buttonCeate-form'>Open Form</button>  
  <FormUser 
  createUser = {createUser}
  infoUpdate={infoUpdate}
  updateUsers={updateUsers}
  setInfoUpdate={setInfoUpdate}
  closeForm = {closeForm}
  setCloseForm = {setCloseForm}
  />
  <div>
    {
      users?.map(user =>(
        <UserCard 
        key={user.id}
        user={user}
        deleteUsers = {deleteUsers}
        setInfoUpdate = {setInfoUpdate}
        />
      ))
      }
  </div>

  </div>

)

}

export default App
