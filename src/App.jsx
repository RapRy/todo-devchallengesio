import React, { useState, useEffect } from "react";

import "./_app.css";
import Navigation from "./components/navigation/Navigation";
import SearchBox from "./components/search/SearchBox";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosLS = localStorage.getItem("todo");

    if (todosLS) {
      setTodos(JSON.parse(todosLS));
    }
  }, []);

  return (
    <div>
      <h1>#todo</h1>
      <main>
        <Navigation setTodos={setTodos} />
        <SearchBox todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
};

export default App;
