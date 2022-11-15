import "./App.css";
import React, { useState, useRef } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Todo from "./components/Todo";
import Done from "./components/Done";
import Menu from "./components/Menu";
import Profile from "./components/Profile";

function App() {
  const 더미 = [
    {
      id: 1,
      title: "TODO 1",
    },
    {
      id: 2,
      title: "TODO 2",
    },
    {
      id: 3,
      title: "TODO 3",
    },
    {
      id: 4,
      title: "TODO 4",
    },
  ];

  const [data, setData] = useState(더미);
  const dataId = useRef(5);

  //새로 만들기
  const onCreate = (title) => {
    const newTodo = {
      id: dataId.current,
      title,
    };
    dataId.current += 1;
    setData([newTodo, ...data]);
  };

  //삭제하기
  const onRemove = (targetId) => {
    const newTodoList = data.filter((el) => el.id !== targetId);
    setData(newTodoList);
  };

  //수정하기
  const onEdit = (targetId, editTitle) => {
    setData(
      data.map((el) => (el.id === targetId ? { ...el, title: editTitle } : el))
    );
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route
            path="/home"
            element={<Home data={data} onCreate={onCreate} />}
          />
          <Route path="/todo" element={<Todo />} />
          <Route path="/done" element={<Done />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
