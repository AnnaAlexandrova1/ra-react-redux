import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../store/actions";

const AddNewTask = () => {
  const { fields, edit } = useSelector((state) => state.serviceEditList);
  const dispatch = useDispatch();

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (fields.title.length < 1 || fields.price.length < 1) {
      return;
    }
    if (edit.isEdit) {
      dispatch(actions.submitChangeTask(fields.title, fields.price, edit.id));
    } else {
      dispatch(actions.addTask(fields.title, fields.price));
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(actions.changeTask(name, value));
  };

  return (
    <form className="row row-cols-lg-auto g-3 align-items-center">
      <div className="col-12"
      style={{minWidth: '65%'}}>
        <label className="visually-hidden" id="inlineFormInputGroupUsername">
          Наименование
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Наименование"
          name="title"
          value={fields.title || ""}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          id="inputPassword2"
          placeholder="Цена"
          name="price"
          value={fields.price || ""}
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleTaskSubmit(e)}
        >
          Отправить
        </button>
        <button
          type="submit"
          className={edit.isEdit ? "btn btn-danger" : "hidden"}
          style={{ marginLeft: "10px" }}
          onClick={(e) => dispatch(actions.resetEdit())}
        >
          Отменить
        </button>
      </div>
    </form>
  );
};

export default AddNewTask;
