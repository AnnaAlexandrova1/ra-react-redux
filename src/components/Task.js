import { ListGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../store/actions";

const Task = ({ task }) => {
  const { id, title, price } = task;
  const dispatch = useDispatch();

  const handleEdit = (title, price, id ) => {
    dispatch(actions.handleTask(title, price, id))
  } 

  return (
   <ul className="list-group list-group-horizontal">
      <li className="list-group-item" style={{ minWidth: "85%" }}>
        {title}
      </li>
      <li className="list-group-item" style={{ minWidth: "10%" }}>
        {price}
      </li>
          <li className="list-group-item"
        onClick={
          () => 
            handleEdit(title, price, id)
          }>
        <FontAwesomeIcon icon={faPenToSquare} />
      </li>
          <li className="list-group-item"
          onClick={()=> dispatch(actions.removeTask(id)
          )}>
        <FontAwesomeIcon icon={faTrash} />
      </li>
     </ul>
  );
};

export default Task;
