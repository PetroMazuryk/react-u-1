import React, {lazy} from "react";
import {Routes, Route} from "react-router-dom";
import "./styles/App.css";

import Layout from "./Layout/Layout";
import Error from "./pages/Error";

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const TasksPage = lazy(() => import("./pages/TasksPage/TasksPage"));
const ToDoPage = lazy(() => import("./pages/ToDoPage"));
const About = lazy(() => import("./pages/About/About"));
const Buttons = lazy(() => import("./pages/Buttons/Buttons"));
const Posts = lazy(() => import("./pages/Posts"));
const PostIdPage = lazy(() => import("./pages/PostIdPage/PostIdPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="todo" element={<ToDoPage />} />
        <Route path="about" element={<About />} />
        <Route path="buttons" element={<Buttons />} />
        <Route path="posts" element={<Posts />} />
        <Route path="post/:id" element={<PostIdPage />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
