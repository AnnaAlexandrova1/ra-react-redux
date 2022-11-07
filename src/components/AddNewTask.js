import { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../store/actions";

const AddNewTask = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const [price, setPrice] = useState('')
    const dispatch = useDispatch();

  const handleTaskChange = (e) => {
    setTaskTitle(e.target.value);
  };
  
    const handlePriceChange = (e) => {
    setPrice(e.target.value)
}
    
    const handleTashSubmit = (e) => {
      e.preventDefault()
      console.log(taskTitle, price)
      dispatch(actions.addTask({ title: taskTitle, price: price}));
      setTaskTitle("");
      setPrice('')
      
  };

  return (
    <form className="row row-cols-lg-auto g-3 align-items-center">
      <div className="col-12">
        <label className="visually-hidden" id="inlineFormInputGroupUsername">
          Наименование
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Наименование"
          value={taskTitle}
                  onChange={(e) => {
                       handleTaskChange(e)
                  }
           
          }
        />
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Цена"
          value={price}
          onChange={(e) => {
            handlePriceChange(e);
          }}
        />
      </div>
       <div className="col-12">
              <button type="submit" className="btn btn-primary"
              onClick={e => handleTashSubmit(e)}>Отправить</button>
       </div>
    </form>
  );
};

export default AddNewTask;
