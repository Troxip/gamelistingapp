import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={`${theme} ${theme === "dark" ? "bg-[#121212]" : ""}`}>
      <Header setTheme={setTheme} />
      <Home />
    </div>
  );
}

export default App;
