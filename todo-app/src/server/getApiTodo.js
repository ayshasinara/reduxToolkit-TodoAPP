import axios from "axios";
import { getTodo } from "../redux/todo";

export const gettodoData = () => async (dispatch) => {
  await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((res) => {
      dispatch(getTodo(res));
    });
};
