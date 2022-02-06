import React, {useState} from 'react';
import TaskInput from '../layouts/TaskInput';
import TaskList from '../layouts/TaskList';
import {Task} from './Types';
import MainHeader from './components/MainHeader';
import DashBoard from './components/DashBoard';

const initialState: Task[] = [
  {
    id: 2,
    title: 'タスク2',
    done: false,
  },
  {
    id: 1,
    title: 'タスク1',
    done: false,
  },
];

const Main: React.VFC = () => {
  const [tasks, setTasks] = useState(initialState);
  return (
    <main className="l-main">
      <MainHeader />
      <DashBoard />
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </main>
  );
};

export default Main;
