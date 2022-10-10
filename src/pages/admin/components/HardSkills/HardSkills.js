import classes from "./HardSkills.module.css";
import Card from "../../../../shared/overlay/Card";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function HardSkills() {
  const [title, setTitle] = useState("");
    const [level, setLevel] = useState(0);
  const onSkillChange = (e) => {
    setTitle(e.target.value);
  };
  const onLevelChange = (e) => {
    setLevel(e.target.value);
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
        level: level,
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    };
    fetch(process.env.REACT_APP_BACKEND_ADMIN_API_KEY + "/hardskill", options)
      .then((res) => {
        if (res.status === 200) {
          toast.success("added");
        } else {
          toast.error("error");
        }
        res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card title="Hard skills" position="center" className={classes.hard_skills}>
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
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={onSkillChange}
        />
        <label htmlFor="Level">Level</label>
        <input
          type="text"
          name="level"
          id="level"
          onChange={onLevelChange}
        />
        <button onClick={onSubmitHander}>add</button>
      </form>
    </Card>
  );
}

export default HardSkills;
