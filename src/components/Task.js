import { ListGroup, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask, removeTask, editTask } from "../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({ task }) => {
  const { id, title, price, completed } = task;
  const dispatch = useDispatch();

  return (
   <ul className="list-group list-group-horizontal">
      <li className="list-group-item" style={{ minWidth: "20%" }}>
        {title}
      </li>
      <li className="list-group-item" style={{ minWidth: "10%" }}>
        {price}
      </li>
          <li className="list-group-item"
          onClick={()=> dispatch(editTask(id)
          )}>
        <FontAwesomeIcon icon={faPenToSquare} />
      </li>
          <li className="list-group-item"
          onClick={()=> dispatch(removeTask(id)
          )}>
        <FontAwesomeIcon icon={faTrash} />
      </li>
     </ul>
  );
};

export default Task;
