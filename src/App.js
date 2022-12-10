import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Done from "./pages/Done";
import Menu from "./pages/Menu";
import Profile from "./pages/Profile";

function App() {
  //삭제하기
  // const onRemove = (targetId) => {
  //   const newTodoList = data.filter((el) => el.id !== targetId);
  //   setData(newTodoList);
  // };

  //수정하기
  // const onEdit = (targetId, editTitle) => {
  //   setData(
  //     data.map((el) => (el.id === targetId ? { ...el, title: editTitle } : el))
  //   );
  // };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/done" element={<Done />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
