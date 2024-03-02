import React from "react";
import classNames from "classnames";
import { Container } from "reactstrap";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../sidebar/SideBar";

import Topbar from "./Topbar";

const Content = ({ children }) => (
  <>
    <div>
      <Topbar />
      <div class="row">
        <div class="col-lg-2  col-md-4 col-sm-6">
          <Sidebar />
        </div>
        <div class="col-lg-10 col-md-8 col-sm-6">
          <main>{children}</main>
        </div>
      </div>
    </div>
  </>
);

export default Content;
