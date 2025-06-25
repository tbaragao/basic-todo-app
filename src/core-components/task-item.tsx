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

export default function TaskItem() {
  const [isEditing, setIsEditing] = React.useState(false);

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
          <InputCheckbox />
          <Text className="flex-1">🛒 Fazer compras da semana</Text>
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
          <InputText value="🛒 Fazer compras da semana" className="grow" />
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
