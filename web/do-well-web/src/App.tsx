import React, {useState} from 'react';
import './css/style.scss';
import Sidebar from './components/Sidebar';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import {Task} from './components/Types';

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

const App: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <>
      <Sidebar />
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </>
  );
};

export default App;
