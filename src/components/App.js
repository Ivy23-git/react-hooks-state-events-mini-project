import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setTasks(TASKS);
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setTasks(filteredTasks);
    }
  };

  const handleTaskFormSubmit = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories={[...CATEGORIES, "All"]}
      selectedCategory={selectedCategory}
      onSelectCategory={handleCategorySelect}
       />
      <NewTaskForm />
      <TaskList />
    </div>
  );
}

export default App;
