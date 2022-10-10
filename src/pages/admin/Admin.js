import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingSpinner from "../../shared/loadingSpinner/LoadingSpinner";
import classes from "./Admin.module.css";
import CurrentPositionForm from "./components/CurrentPositionForm/CurrentPositionForm";
import FileManager from "./components/FileManager/FileManager";
import GalleryItems from "./components/GalleryItems/GalleryItems";
import HardSkills from "./components/HardSkills/HardSkills";
import PreviusPositions from "./components/PreviusPositions/PreviusPositions";
import Snippets from "./components/Snippets/Snippets";
import SoftSkill from "./components/SoftSkills/SoftSkill";

function Admin() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    authAdmin();
  }, []);

  const authAdmin = async () => {
    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    };

    const endpoint = process.env.REACT_APP_BACKEND_ADMIN_API_KEY;
    const response = await fetch(endpoint, options);
    if (response.status === 200) {
      setIsAdmin(true);
      toast.success("Access granted!");
    }
    if (response.status === 401) {
      toast.error("Authentication needed!");
    }
    if (response.status === 403) {
      toast.error("Access denied!");
    }
    setIsLoading(false);
  };

  return (
    <div className={classes.admin_page}>
      <Toaster
        position="top-left"
        reverseOrder={false}
        toastOptions={{
          style: {
            zIndex: 20000,
            marginTop: "100px",
          },
        }}
      />
      <h1>Admin page</h1>
      {isLoading && !isAdmin && <LoadingSpinner />}
      {!isLoading && isAdmin && (
        <div className={classes.admin_page_content}>
          <div className={classes.forms}>
            <CurrentPositionForm />
            <GalleryItems />
            <HardSkills />
            <SoftSkill />
            <PreviusPositions />
            <Snippets />
          </div>
          <div className={classes.fileManager}>
            <FileManager />
          </div>
        </div>
      )}
      {!isLoading && !isAdmin && <h1>Access denied</h1>}
    </div>
  );
}

export default Admin;
