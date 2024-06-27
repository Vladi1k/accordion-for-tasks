import React from 'react';
import "../assets/global.scss";
import "../assets/variables.scss";
import style from "./Tasks.module.scss";
import TasksInfo from './TasksInfo/TasksInfo';
import TasksItem from './TasksItem/TasksItem';


function Tasks() {
    return (
        <div className='container'>
            <h1 className={style.tasks__title}>Задачи</h1>
            <TasksInfo/>
            <TasksItem/>
        </div>
    );
};

export default Tasks;