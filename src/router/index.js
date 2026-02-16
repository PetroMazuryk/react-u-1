import {lazy} from "react";
const HomePage = lazy(() => import("../pages/HomePage"));
const NewsPage = lazy(() => import("../pages/NewsPage"));
const TasksPage = lazy(() => import("../pages/TasksPage/TasksPage"));
const ToDoPage = lazy(() => import("../pages/ToDoPage"));
const About = lazy(() => import("../pages/About/About"));
const Buttons = lazy(() => import("../pages/Buttons/Buttons"));
const Posts = lazy(() => import("../pages/Posts"));
const PostIdPage = lazy(() => import("../pages/PostIdPage/PostIdPage"));
const Error = lazy(() => import("../pages/Error.jsx"));

export const routers = [
  {index: true, element: <HomePage />},
  {path: "news", element: <NewsPage />},
  {path: "tasks", element: <TasksPage />},
  {path: "todo", element: <ToDoPage />},
  {path: "about", element: <About />},
  {path: "buttons", element: <Buttons />},
  {path: "posts", element: <Posts />},
  {path: "post/:id", element: <PostIdPage />},
  {path: "*", element: <Error />},
];
