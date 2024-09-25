import { Route, Routes } from "react-router-dom";
import "./App.css";

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Project } from "./components/Project";
import { Skill } from "./components/Skill";
import Layout from "./components/Layout";
import Nothing from "./components/Nothing";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Layout/>}>
             <Route path="/" element={<Hero />}/>
             <Route path="skills" element={<Skill />}/>
             <Route path="projects" element={<Project />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="*" element={<Nothing/>}/>

          </Route>
        </Routes>

    </>
  ); 
};

export default App;
