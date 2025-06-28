import Button from "../components/button";
import PlusIcon from "../assets/icons/plus-regular.svg?react";
import TaskItem from "./task-item";

export default function TaskList() {
  return (
    <>
      <section className="">
        <Button icon={PlusIcon} className="w-full">
          New Task
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
