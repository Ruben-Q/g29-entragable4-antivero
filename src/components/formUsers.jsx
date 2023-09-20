import { useEffect, useState } from "react";
import { useForm} from "react-hook-form"
import './styles/FormUser.css'

const FormUser = ({ createUser, infoUpdate, updateUsers, setInfoUpdate, closeForm, setCloseForm }) => {

const{handleSubmit, register, reset} = useForm()

useEffect(() => {
reset(infoUpdate)
}, [infoUpdate])
console.log(infoUpdate)
const submit = data => {
    if(infoUpdate){
    // Update
    updateUsers("/users", infoUpdate.id, data)
    setInfoUpdate()
    } else {
    // Create
    createUser("/users", data)
    }
    
    reset ({
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    })
}

const handleCloseForm = () => {
  setCloseForm(true)
}

return ( 

<div className={`formUser-container ${closeForm && "close-all" }`}>
  <form className="formUser" onSubmit={handleSubmit(submit)}>
  
        <div onClick={handleCloseForm} className="heather-close">close</div>
        <h1 className="heather-title">Users</h1>
        
        <hr className="heatherLinea-sep-titulo" />

        <div className='heatherPhoto-newUser'>
        <h1>Subir foto</h1>
        </div>
        
        <div className='heather-foto'>
        <p className='heatherFhoto-notMandatory'>Campo no obligatorio</p>
        <button className='heatherTex-notMandatory' onClick>Subir foto</button>
        </div>
      
      <div className="formUser-group">
        <h3 className="campos-obligatorios">Campos Obligatorios</h3>
        <label className="formUser-label" htmlFor="email">Email</label>
        <input className="formUser-input" {...register('email')} type="email" id="email" />
      </div>

      <div className="formUser-group">
        <label className="formUser-label" htmlFor="password">Password</label>
        <input className="formUser-input" {...register('password')} type="password" id="password" />
      </div>

      <div className="formUser-group">
        <label className="formUser-label" htmlFor="first_name">First name</label>
        <input className="formUser-input" {...register('first_name')} type="text" id="first_name" />
      </div>

      <div className="formUser-group">
        <label className="formUser-label" htmlFor="last_name">Last name</label>
        <input className="formUser-input" { ...register('last_name')} type="text" id="last_name" />
      </div>

      <div className="formUser-group">
        <label className="formUser-label" htmlFor="birthday">Birthday </label>
        <input className="formUser-input" {...register('birthday')} type="date" id="birthday" />
      </div>

      <button className="formUser-createBtnUser">{ infoUpdate ? "update this user" : "Create a new user"}</button>

  </form>
</div>


    );
};

export default FormUser