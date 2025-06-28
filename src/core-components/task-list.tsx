import Button from "../components/button";
import PlusIcon from "../assets/icons/plus-regular.svg?react";
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

export default function TaskList() {
  const { tasks } = useTasks();

  const { prepareTask } = useTask();

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section className="">
        <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
          New Task
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
