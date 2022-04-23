import React, { useEffect, useState } from 'react';
import { User } from '../../../models/user';
import { useHooks } from './index.hooks';

export interface UserProps {
  users: User
}

export const TodoFunc: React.FC<UserProps> = () => {
const [users] = useHooks(); 
console.log('users', users)

let tbodyData: any[][] = [['', '', '', '', '', '', '', '', '', '', '', '', '', '', '']]
users?.map((user: User)=> {
  const name = <div>{user.name}</div>
})

tbodyData.push([name]);


  return (
    <>
      <div>
      </div>
    </>
  )
};

export default React.memo(TodoFunc); 