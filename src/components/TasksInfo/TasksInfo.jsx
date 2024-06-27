import React from "react";
import style from "./TasksInfo.module.scss";

function TasksInfo() {
  return (
    <div className={style.tasks__info}>
      <span className={style.data__title}>Дата</span>
      <span className={style.codeTask__title}>
        Шифр <br /> задачи
      </span>
      <span className={style.codeTask__title}>
        Шифр <br /> проекта
      </span>
      <span className={style.taskName__title}>Задача</span>
      <span className={style.taskStatus__title}>Статус</span>
      <span className={style.taskResponsible__title}>Ответственный</span>
      <span className={style.taskReassign__title}>Переназначить</span>
      <span className={style.taskComment__title}>Комментарий</span>
      <span className={style.planTime}>
        План <br />
        время
      </span>
      <span className={style.planTime}>
        Факт <br />
        время
      </span>
      <span className={style.planTime}>Начал</span>
      <span className={style.planTime}>Завершил</span>
    </div>
  );
}

export default TasksInfo;
