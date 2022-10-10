import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from "../../../../shared/overlay/Card";
import classes from "./CurrentPositionForm.module.css";

function CurrentPositionForm() {
  //select multiple image files from a single input field
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [company_logo, setCompany_logo] = useState("");
  const [role, setRole] = useState("");
  const [tool, setTool] = useState("");
  const [tools, setTools] = useState([]);

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onCompanyChange = (e) => {
    setCompany(e.target.value);
  };
  const onCompany_logoChange = (e) => {
    setCompany_logo(e.target.value);
  };
  const onRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleIcons = (e) => {
    setTool(e.target.value);
  };

  const addIcons = (e) => {
    e.preventDefault();
    setTools([...tools, tool]);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        company: company,
        company_logo: company_logo,
        role: role,
        tools: tools,
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    };
    fetch(
      process.env.REACT_APP_BACKEND_ADMIN_API_KEY + "/currentposition",
      options
    )
      .then((res) => {
        if (res.status === 200) {
          toast.success("updated");
        }
        else {
          toast.error("error");
        }
        res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <Card
      position="center"
      title="Current position update"
      className={classes.current_position_form}
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
      <form className={classes.current_form} onSubmit={handleFileUpload}>
        <label htmlFor="title">Title</label>
        <input onChange={onTitleChange} type="text" className={classes.title} />
        <label htmlFor="company">company</label>
        <input
          onChange={onCompanyChange}
          type="text"
          className={classes.company}
        />
        <label htmlFor="company_logo">company_logo</label>
        <input
          onChange={onCompany_logoChange}
          type="text"
          className={classes.company_logo}
        />
        <label htmlFor="role">role</label>
        <input onChange={onRoleChange} type="text" className={classes.role} />
        <label htmlFor="description">description</label>
        <textarea
          onChange={onDescriptionChange}
          className={classes.description}
        />
        <label htmlFor="tools">tools</label>
        <input type="text" onChange={handleIcons} />
        <button onClick={addIcons}>add</button>
        <div className={classes.added_tools}>
          {tools.map((tool) => (
            <p>{tool}</p>
          ))}
        </div>
        <button onClick={handleFileUpload}>feltöltés</button>
      </form>
    </Card>
  );
}

export default CurrentPositionForm;
