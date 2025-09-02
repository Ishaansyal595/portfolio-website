import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import AddProjectForm from "./components/AddProject";
import ProjectDetail from "./pages/ProjectDetail";
import EditProject from "./components/Edit Project";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Toaster position="top-center" richColor />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/add-project" element={<AddProjectForm />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/project/:id/edit-project" element={<EditProject />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
