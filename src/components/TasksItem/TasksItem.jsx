// TasksItem.js
import React from "react";
import style from "./TasksItem.module.scss";
import data from "../../data/data";

function TasksItem() {
  const taskData = data[0];

  return (
    <div>
      {data.map((taskData) => (
        <div className={style.tasks__item}>
          <span className={style.date__text}>{taskData.date}</span>
          <span className={style.codeTask__text}>{taskData.codeTask}</span>
          <span className={style.codeProject__text}>
            {taskData.codeProject}
          </span>
          <span className={style.taskName__text}>{taskData.taskName}</span>
          <span className={style.taskStatus__text}>{taskData.taskStatus}</span>
          <span className={style.taskResponsible__text}>
            {taskData.taskResponsible}
          </span>
          <span className={style.taskReassign__text}>
            {taskData.taskReassign}
          </span>
          <span className={style.taskComment__text}>
            {taskData.taskComment}
          </span>
          <span className={style.planTime}>{taskData.planTime}</span>
          <span className={style.factTime}>{taskData.factTime}</span>
          <span
            className={style.beganTime}
            dangerouslySetInnerHTML={{ __html: taskData.beganTime }}
          ></span>
          <span
            className={style.finishTime}
            dangerouslySetInnerHTML={{ __html: taskData.finishTime }}
          ></span>
        </div>
      ))}
    </div>
  );
}

export default TasksItem;
