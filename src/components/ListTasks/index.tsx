import React from 'react';
import { Task as TaskType } from '../../types/Task';
import Task from './Task';

interface Props {
  tasks: TaskType[],
}

export default function ListTasks({ tasks }: Props) {
  return (
    <>
      {tasks.map((item) => (
        <Task key={item.guid} task={item} />
      ))}
    </>
  );
}
