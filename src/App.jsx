import { useEffect, useState } from 'react'
import UserList from './componente/UserList/UserList'
import Header from './componente/Header/Header'
import Modal from './componente/Modal/Modal'
import axios from 'axios'
const URL_BASE = 'https://users-crud.academlo.tech'
const DEFAULT_VALUES = {
  first_name : "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""
}
function App() {
  
  const [formActive, setFormActive] = useState(false)
  const [users,setUsers] = useState([]);
  const [isEdit , setIsEdit ] = useState(false);
  const [userToEdit , setUserToEdit] = useState(DEFAULT_VALUES);
  
  const changeShowModal = () => {
    setFormActive(!formActive);
  }

  const changeShowModalCreate = () => {
    
    setIsEdit(false);
    setUserToEdit(null);
    setFormActive(!formActive);
  }

  const getAllUsers = () => {
    
    axios.get(URL_BASE+"/users").
    then(({data}) => {
      setUsers(data);
    })
    .catch((err) => {
    })
  }

  const createUsers = (dataUser,reset) => {
    axios.post(URL_BASE+"/users/",dataUser).then((data) => {
      resetForm(reset);
      getAllUsers();
    }).catch((err) => {
      console.log(err);
    })
  }

  const deleteUser = (id) => {
    axios.delete(URL_BASE+`/users/${id}`).then(() => {
      getAllUsers();
    });
  }

  const editUser = (user) => {
    changeShowModal();
    setIsEdit(true);
    setUserToEdit(user);
  }

  const updateUser = (data,reset) => {
    axios.patch(URL_BASE+`/users/${userToEdit.id}`,
    data).then(() => {
      getAllUsers();
      resetForm(reset);
    }).catch(() => {
      alert("Tenemos un error en el servidor");
      getAllUsers();
      resetForm(reset);
    })
  }

  const resetForm = (reset) => {
    changeShowModal();
    reset(DEFAULT_VALUES);
    setUserToEdit(null);
  }

  useEffect(() => {
    getAllUsers();
  }, [])

  return (
            <main className='font-["Roboto"] flex flex-col items-center gap-10'>
              <Header changeShowModal= {changeShowModalCreate}></Header>

              <Modal 
                userToEdit={userToEdit}
                isEdit={isEdit}
                createUsers ={createUsers}
                formActive={formActive}
                changeShowModal ={changeShowModal}
                updateUser = {updateUser}
                resetForm = {resetForm}
                ></Modal>
              <UserList users ={users} editUser={editUser} deleteUser={deleteUser}></UserList>
            </main>
  )
}

export default App
