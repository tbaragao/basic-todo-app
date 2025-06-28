import ButtonIcon from "../components/button-icon";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import TrashIcon from "../assets/icons/trash-regular.svg?react";
import PencilIcon from "../assets/icons/pencil-simple-regular.svg?react";
import XIcon from "../assets/icons/x-regular.svg?react";
import CheckIcon from "../assets/icons/check-regular.svg?react";
import Card from "../components/card";
import React from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = React.useState(
    task?.state === TaskState.Creating
  );

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleCancelEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex itemx-center  gap-4">
      {isEditing === false ? (
        <>
          <InputCheckbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.concluded,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon variant="terciary" icon={TrashIcon} />
            <ButtonIcon
              variant="terciary"
              onClick={handleEditTask}
              icon={PencilIcon}
            />
          </div>
        </>
      ) : (
        <>
          <InputText value={task.title} className="grow" />
          <div className="flex gap-1">
            <ButtonIcon
              variant="secondary"
              onClick={handleCancelEditTask}
              icon={XIcon}
            />
            <ButtonIcon variant="primary" icon={CheckIcon} />
          </div>
        </>
      )}
    </Card>
  );
}
