import Icon from "./components/icon";
import Text from "./components/text";
import TrashIcon from "./assets/icons/trash-regular.svg?react";
import Badge from "./components/badge";

export default function App() {

  return (
    <>
      <Text variant="body-md-bold" className="text-green-base">Clean Project with tailwind</Text>
      <Icon svg={TrashIcon} className="fill-green-base"/>
      <Badge variant="primary">5</Badge>
      <Badge variant="secondary">2 de 5</Badge>
    </>
  )
}

