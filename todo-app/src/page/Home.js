import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettodoData } from "../server/getApiTodo.js";

function Home() {
  const todo = useSelector((state) => state.todo.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gettodoData());
  }, []);
  useEffect(() => {
    console.log(todo);
  }, [todo]);
  return (
    <div>
      {todo.map((e) => {
        return (
          <div>
            <div>{e.title}</div>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
