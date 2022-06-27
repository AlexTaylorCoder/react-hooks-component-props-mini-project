import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList"
import Header from "./Header"


function App() {
  return (
    <div className="App">
    <Header />
    <ArticleList />
    <About />
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
