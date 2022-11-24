import Task from "./Task";

const TaskList = ({ tasks }) => {
  if (tasks.length) {
    const list = tasks.map((task) => {
      return <Task key={task.id} task={task} />;
    });
    return list;
  } else {
    return null;
  }
};

export default TaskList;
