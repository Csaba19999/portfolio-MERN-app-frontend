import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from "../../../../shared/overlay/Card";
import classes from "./GalleryItems.module.css";

function GalleryItems() {
  const [cover, setCover] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pagelink, setPagelink] = useState("");
  const [githublink, setGithublink] = useState("");
  const [tools, setTools] = useState([]);
  const [tool, setTool] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  const onCoverChange = (e) => {
    setCover(e.target.value);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onPagelinkChange = (e) => {
    setPagelink(e.target.value);
  };
  const onGithublinkChange = (e) => {
    setGithublink(e.target.value);
  };
  const onToolChange = (e) => {
    setTool(e.target.value);
  };
  const onToolsChange = (e) => {
    e.preventDefault();
    setTools([...tools, tool]);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onHoursChange = (e) => {
    setHours(e.target.value);
  };

  const onSubmitHander = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cover: cover,
        title: title,
        description: description,
        pagelink: pagelink,
        githublink: githublink,
        tools: tools,
        date: date,
        hours: hours,
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    };
    fetch(process.env.REACT_APP_BACKEND_ADMIN_API_KEY + "/gallery", options)
      .then((res) => {
        if (res.status === 200) {
          toast.success("updated");
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
    <Card
      title="Gallery items"
      position="center"
      className={classes.gallery_items}
    >
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
      <form className={classes.galleryItems_form} onSubmit={onSubmitHander}>
        <label htmlFor="title">Title</label>
        <input onChange={onTitleChange} type="text" />
        <label htmlFor="description">Description</label>
        <textarea onChange={onDescriptionChange} />
        <label htmlFor="image">cover</label>
        <input onChange={onCoverChange} type="text" />
        <label htmlFor="pagelink">page link</label>
        <input onChange={onPagelinkChange} type="text" />
        <label htmlFor="githublink">github link</label>
        <input onChange={onGithublinkChange} type="text" />
        <label htmlFor="tools">tools</label>
        <input onChange={onToolChange} type="text" />
        <button onClick={onToolsChange}>add</button>
        <div className={classes.added_tools}>
          {tools.map((tool) => (
            <p>{tool}</p>
          ))}
        </div>
        <label htmlFor="date">date</label>
        <input onChange={onDateChange} type="text" />
        <label htmlFor="hours">hours</label>
        <input onChange={onHoursChange} type="text" />
        <button onClick={onSubmitHander}>submit</button>
      </form>
    </Card>
  );
}

export default GalleryItems;
