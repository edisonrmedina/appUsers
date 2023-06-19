import React from 'react'

export default function Header({changeShowModal}) {
    const handlechangeShowModal = () => {
        changeShowModal();
    }
    
    return (
        <section className='flex justify-around items-center w-full p-3'>
            <h1 className='font-bold text-2xl'>Usuarios</h1>
            <button
            onClick={handlechangeShowModal} 
            className='btn-primary p-2'><box-icon name='plus'></box-icon>Crear Usuario</button>  
        </section>
    )
}
