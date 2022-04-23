import { useEffect, useState } from 'react';

export const useHooks = (): [
  any,
] => {
  /** 出金依頼履歴の取得 */
  //扱うデータ群
  const userData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" }
  ];

  const [users, setUsers] = useState([]);

  useEffect(()=> {
    setUsers(userData)
  }, [])

console.log('users', users)
  return [users];
}; 