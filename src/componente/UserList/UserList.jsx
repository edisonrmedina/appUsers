import React from 'react'
import { User } from '../User/User'

export default function UserLsit({users,deleteUser,editUser}) {
    
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {users.map((user) => (
            <User key={user.id} user={user} editUser={editUser} deleteUser={deleteUser} />
          ))}
        </section>
      );
}
