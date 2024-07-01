import React, { useState } from "react";
import style from "./TasksItem.module.scss";
import data from "../../data/data";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import statuses from "../../data/statuses";

function TasksItem() {
  const [tasks, setTasks] = useState(data);
  const [showCompletedTasks, setShowCompletedTasks] = useState(false);
  const [showInProgressTasks, setShowInProgressTasks] = useState(false);
  const [showPausedTasks, setShowPausedTasks] = useState(false);

  function statusChange(index, newStatus) {
    const updatedTasks = [...tasks];
    updatedTasks[index].taskStatus = newStatus;
    setTasks(updatedTasks);
  }

  const toggleCompletedTasks = () => {
    setShowCompletedTasks(!showCompletedTasks);
    setShowInProgressTasks(false)
    setShowPausedTasks(false)
  };

  const toggleInProgressTasks = () => {
    setShowInProgressTasks(!showInProgressTasks);
    setShowPausedTasks(false)
    setShowCompletedTasks(false)
  };

  const togglePausedTasks = () => {
    setShowPausedTasks(!showPausedTasks);
    setShowCompletedTasks(false);
    setShowInProgressTasks(false);
  };

  const completedTasks = tasks.filter(task => task.taskStatus === statuses.done);
  const inProgressTasks = tasks.filter(task => task.taskStatus === statuses.atWork);
  const pausedTasks = tasks.filter(task => task.taskStatus === statuses.onPause);

  return (
    <div>
      <div onClick={toggleCompletedTasks} className={style.header}>
        <span className={style.header__text}>Выполененные задачи</span> 
        <span className={style.header__arrow}>{showCompletedTasks ? '▲' : '▼'}</span>
      </div>
      {showCompletedTasks && completedTasks.map((taskData, index) => (
        <div key={index} className={style.tasks__item}>
          <span className={style.date__text}>{taskData.date}</span>
          <span className={style.codeTask__text}>{taskData.codeTask}</span>
          <span className={style.codeProject__text}>{taskData.codeProject}</span>
          <span className={style.taskName__text}>{taskData.taskName}</span>
          <span className={style.taskStatus__text}>
            <DropDownMenu
              taskStatus={taskData.taskStatus}
              onChange={(newStatus) => statusChange(index, newStatus)}
              statuses={statuses}
            />
          </span>
          <span className={style.taskResponsible__text}>{taskData.taskResponsible}</span>
          <span className={style.taskReassign__text}>{taskData.taskReassign}</span>
          <span className={style.taskComment__text}>{taskData.taskComment}</span>
          <span className={style.planTime}>{taskData.planTime}</span>
          <span className={style.factTime}>{taskData.factTime}</span>
          <span className={style.beganTime} dangerouslySetInnerHTML={{ __html: taskData.beganTime }}></span>
          <span className={style.finishTime} dangerouslySetInnerHTML={{ __html: taskData.finishTime }}></span>
        </div>
      ))}

      <div onClick={toggleInProgressTasks} className={style.header}>
        <span className={style.header__text}>Задачи на сегодня</span>
        <span className={style.header__arrow}>{showInProgressTasks ? '▲' : '▼'}</span>
      </div>
      {showInProgressTasks && inProgressTasks.map((taskData, index) => (
        <div key={index} className={style.tasks__item}>
          <span className={style.date__text}>{taskData.date}</span>
          <span className={style.codeTask__text}>{taskData.codeTask}</span>
          <span className={style.codeProject__text}>{taskData.codeProject}</span>
          <span className={style.taskName__text}>{taskData.taskName}</span>
          <span className={style.taskStatus__text}>
            <DropDownMenu
              taskStatus={taskData.taskStatus}
              onChange={(newStatus) => statusChange(index, newStatus)}
              statuses={statuses}
            />
          </span>
          <span className={style.taskResponsible__text}>{taskData.taskResponsible}</span>
          <span className={style.taskReassign__text}>{taskData.taskReassign}</span>
          <span className={style.taskComment__text}>{taskData.taskComment}</span>
          <span className={style.planTime}>{taskData.planTime}</span>
          <span className={style.factTime}>{taskData.factTime}</span>
          <span className={style.beganTime} dangerouslySetInnerHTML={{ __html: taskData.beganTime }}></span>
          <span className={style.finishTime} dangerouslySetInnerHTML={{ __html: taskData.finishTime }}></span>
        </div>
      ))}

      <div onClick={togglePausedTasks} className={style.header}>
        <span className={style.header__text}>Задачи на паузе </span>
        <span className={style.header__arrow}>{showPausedTasks ? '▲' : '▼'}</span>
      </div>
      {showPausedTasks && pausedTasks.map((taskData, index) => (
        <div key={index} className={style.tasks__item}>
          <span className={style.date__text}>{taskData.date}</span>
          <span className={style.codeTask__text}>{taskData.codeTask}</span>
          <span className={style.codeProject__text}>{taskData.codeProject}</span>
          <span className={style.taskName__text}>{taskData.taskName}</span>
          <span className={style.taskStatus__text}>
            <DropDownMenu
              taskStatus={taskData.taskStatus}
              onChange={(newStatus) => statusChange(index, newStatus)}
              statuses={statuses}
            />
          </span>
          <span className={style.taskResponsible__text}>{taskData.taskResponsible}</span>
          <span className={style.taskReassign__text}>{taskData.taskReassign}</span>
          <span className={style.taskComment__text}>{taskData.taskComment}</span>
          <span className={style.planTime}>{taskData.planTime}</span>
          <span className={style.factTime}>{taskData.factTime}</span>
          <span className={style.beganTime} dangerouslySetInnerHTML={{ __html: taskData.beganTime }}></span>
          <span className={style.finishTime} dangerouslySetInnerHTML={{ __html: taskData.finishTime }}></span>
        </div>
      ))}
    </div>
  );
}

export default TasksItem;
