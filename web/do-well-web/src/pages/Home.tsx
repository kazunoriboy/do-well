import React, {useState} from 'react';
import '../css/style.scss';
import Sidebar from '../layouts/Sidebar';
import TaskInput from '../layouts/TaskInput';
import TaskList from '../layouts/TaskList';
import {Task} from '../layouts/Types';

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

const Home: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <div className="f-wrapper">
      <Sidebar />
      <main className="l-main">
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </main>
    </div>
  );
};

export default Home;
