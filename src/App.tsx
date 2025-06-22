import Icon from "./components/icon";
import Text from "./components/text";
import TrashIcon from "./assets/icons/trash-regular.svg?react";
import Badge from "./components/badge";
import Button from "./components/button";
import ButtonIcon from "./components/button-icon";
import InputText from "./components/input-text";
import InputCheckbox from "./components/input-checkbox";
import Card from "./components/card";
import Container from "./components/container";
import Skeleton from "./components/skeleton";

export default function App() {
  return (
    <>
      <Container>
        <Text variant="body-md-bold" className="text-green-base">
          Clean Project with tailwind
        </Text>
        <Icon svg={TrashIcon} className="fill-green-base" />
        <div className="flex gap-1">
          <Badge variant="primary">5</Badge>
          <Badge variant="secondary">2 de 5</Badge>
          <Badge variant="primary" loading>
            5
          </Badge>
        </div>

        <Button icon={TrashIcon} type="button">
          Delete
        </Button>
        <ButtonIcon
          variant="primary"
          icon={TrashIcon}
          type="button"
        ></ButtonIcon>
        <ButtonIcon
          variant="secondary"
          icon={TrashIcon}
          type="button"
        ></ButtonIcon>
        <ButtonIcon
          variant="terciary"
          icon={TrashIcon}
          type="button"
        ></ButtonIcon>
        <InputText />
        <InputCheckbox />
        <Card size="md">Hello World</Card>
        <Skeleton rounded="sm" className="w-96 h-3 mb-2" />
        <Skeleton rounded="lg" className="w-96 h-3 mb-2" />
        <Skeleton rounded="full" className="w-96 h-96 mb-2" />
      </Container>
    </>
  );
}
