import classes from "./SoftSkill.module.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from "../../../../shared/overlay/Card";

function SoftSkill() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onSubmitHander = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    };
    fetch(process.env.REACT_APP_BACKEND_ADMIN_API_KEY + "/softskill", options)
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success("Soft Skill Added Successfully");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <Card title="soft skills" position="center" className={classes.soft_skill}>
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
      <form className={classes.form} onSubmit={onSubmitHander}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={onTitleChange}
        ></input>
        <label htmlFor="description">description</label>
        <textarea
          id="description"
          value={description}
          onChange={onDescriptionChange}
        ></textarea>
        <button type="submit">add</button>
      </form>
    </Card>
  );
}

export default SoftSkill;
