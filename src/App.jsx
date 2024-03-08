import { Route, Routes } from "react-router-dom";
import styles from "./App.module.scss";
import { Layout } from "./components";
import { Routing } from "./pages";
import Home from "./pages/Home/Home";

export const App = () => {
  return (
    <div className={styles.App}>
      <Routing />
    </div>
  );
};
