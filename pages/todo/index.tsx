import React from 'react';
import { TodoFunc } from '../../components/templates/todo';
import { useHooks } from '../../components/templates/todo/index.hooks';

const TodoPage: React.FC = () => {
  const [users] = useHooks();
  return (
    <>
    <TodoFunc users={users}/>
    </>
  );
};
export default React.memo(TodoPage); 