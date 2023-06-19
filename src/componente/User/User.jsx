import React from 'react'

export const User = ({user,editUser,deleteUser}) => {
    
    const handleDeleteUser = () => {
        deleteUser(user.id);
    }

    const handeditUser = () => {
        editUser(user)
    }

    return (
        <section className="flex flex-col justify-between bg-gray-50 p-4 rounded-md">
        <div className="self-start">
          <h4 className='font-bold'>{user.first_name} {user.last_name}</h4>
          <div>
            <h5 className='text-gray-500'>Correo</h5>
            <span>{user.email}</span>
          </div>
          <div>
            <h5 className='text-gray-500'>Cumpleaños</h5>
            <span >
              <box-icon name='gift' type='solid'></box-icon>
              {user.birthday || "No encontrado"}
            </span>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button className='bg-red-600 ' onClick={handleDeleteUser}>
            <box-icon name='trash' color = "#ffffff" type='solid'></box-icon>
          </button>
          <button onClick={handeditUser}>
            <box-icon name='pencil' type='solid'></box-icon>
          </button>
        </div>
      </section>
    )
}
