import React from 'react';
import { TodoFunc } from '../../components/templates/todo';

const TodoPage: React.FC = () => {
  return (
    <>
    <TodoFunc />
    </>
  );
};
export default React.memo(TodoPage); 