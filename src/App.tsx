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

        <div className="flex gap-1">
          <Button icon={TrashIcon} type="button">
            Delete
          </Button>
        </div>
        <div className="flex gap-2">
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
          <ButtonIcon
            variant="primary"
            icon={TrashIcon}
            type="button"
            loading
          />
        </div>
        <div className="flex gap-1">
          <InputText />
        </div>

        <div className="flex gap-2">
          <InputCheckbox />
          <InputCheckbox loading />
        </div>

        <div className="flex gap-2">
          <Card size="md">Hello World</Card>
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton rounded="sm" className="w-96 h-3 mb-2" />
          <Skeleton rounded="lg" className="w-96 h-3 mb-2" />
          <Skeleton rounded="full" className="w-9 h-9 mb-2" />
        </div>
      </Container>
    </>
  );
}
