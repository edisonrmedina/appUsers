import axios from 'axios';
import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form'
const Modal = ({resetForm,updateUser,userToEdit,isEdit,createUsers,formActive,changeShowModal}) => {
    
    const {register, handleSubmit,reset} = useForm()
    
    const handlechangeShowModal = () => {
        resetForm(reset);
    }

    const submit = (data) => {
        debugger;
        if (!data.birthday) {
            data.birthday = null;
        }
        if(userToEdit){
            updateUser(data,reset)
        }else{
            createUsers(data,reset);
        }
        
    }

    useEffect(() => {
       if(userToEdit){
        reset(userToEdit);
       }
    }, [userToEdit])

    return (
    <section className={`fixed top-3 left-0 right-0 h-screen bg-black/40 grid place-content-center ${formActive ? "visible opacity-100": "invisible opacity-0" } transition-opacity`}>
        <form onSubmit={handleSubmit(submit)} className='bg-white w-[280px] p-4 grid gap-6 relative'> 
            <h3 className='font-bold text-3xl'>
                {isEdit ?  'Editar Usuario': 'Nuevo Usuario'}
            </h3>
            <div className="grid gap-2">
                <label className='font-bold text-sm' htmlFor="">Nombre: </label>
                <input className="bg-gray-100 outline-none p-2" type="text" name="" id=""
                {...register("first_name")} />
            </div>
            <div className="grid gap-2">
                <label className='font-bold text-sm' htmlFor="">Apellidos: : </label>
                <input className="bg-gray-100 outline-none p-2" type="text" name="" id="" 
                {...register("last_name")}/>
            </div>
            <div className="grid gap-2">
                <label className='font-bold text-sm' htmlFor="">Correo: </label>
                <input className="bg-gray-100 outline-none p-2" type="text" name="" id="" 
                {...register("email")}/>
            </div>
            <div className="grid gap-2">
                <label className='font-bold text-sm' htmlFor="">Contraseña: </label>
                <input className="bg-gray-100 outline-none p-2" type="password" name="" id="" 
                {...register("password")}/>
            </div>
            <div className="grid gap-2">
                <label className='font-bold text-sm' htmlFor="">Cumpleaños: </label>
                <input className="bg-gray-100 outline-none p-2" type="date" name="" id="" 
                {...register("birthday")}/>
            </div>
            <button type="button" onClick={handlechangeShowModal} className='absolute top-2 right-2 text-4xl hover:text-secondary'><box-icon name='x' ></box-icon></button>
            <button className='btn-primary p-2'>
                {
                    isEdit ? 'Editar' : 'Agregar Nuevo Usuario'
                }
            </button>
        </form>
    </section>
  );
}

export default Modal;
