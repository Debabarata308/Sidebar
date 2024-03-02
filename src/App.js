import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Content from "./components/content/Content";
import Page1 from "./components/Pages/Page1";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import SubMenu from "./components/sidebar/SubMenu";
import About from "./components/Pages/About";

const App = () => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <Router>
      <Content>
        <Routes>
          <Route exact path="/" component={() => "Hello"} />
          <Route path="/about" element={<About />} />
          <Route exact path="/Pages" component={() => "Pages"} />
          <Route path="/faq" component={() => "FAQ"} />
          <Route path="/contact" element={<Page1 />} />
        </Routes>
      </Content>
    </Router>
  );
};

export default App;
