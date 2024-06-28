import React, { useState } from "react";
import style from "./TasksItem.module.scss";
import data from "../../data/data";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import statuses from "../../data/statuses";

function TasksItem() {

  const [tasks, setTasks] = useState(data);

  function statusChange(index, newStatus) {
    const updatedTasks = [...tasks];
    updatedTasks[index].taskStatus = newStatus;
    setTasks(updatedTasks);
  }

  return (
    <div>
      {tasks.map((taskData, index) => (
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
