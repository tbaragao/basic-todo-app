import Icon from "./components/icon";
import Text from "./components/text";
import TrashIcon from "./assets/icons/trash-regular.svg?react";

export default function App() {

  return (
    <>
      <Text variant="body-md-bold" className="text-green-base">Clean Project with tailwind</Text>
      <Icon svg={TrashIcon} className="fill-green-base"/>
    </>
  )
}

