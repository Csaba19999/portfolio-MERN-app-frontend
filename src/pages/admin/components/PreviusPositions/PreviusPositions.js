import classes from "./PreviusPositions.module.css";
import Card from "../../../../shared/overlay/Card";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function PreviusPositions() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [company, setCompany] = useState("");
  const [company_logo, setCompany_logo] = useState("");
  const [role, setRole] = useState("");
  const [tool, setTool] = useState("");
  const [tools, setTools] = useState([]);

  const onDateChange = (e) => {
    setDate(e.target.value);
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
        date: date,
        description: description,
        company: company,
        company_logo: company_logo,
        role: role,
        tools: tools,
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    };
    fetch(
      process.env.REACT_APP_BACKEND_ADMIN_API_KEY + "/previusposition",
      options
    )
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
        toast.error("something went wrong");
      });
  };

  return (
    <Card
      title="previus positions"
      position="center"
      className={classes.previus_positions}
    >
      <form className={classes.form} onSubmit={handleFileUpload}>
        <label htmlFor="title">date</label>
        <input type="text" name="date" id="date" onChange={onDateChange} />
        <label htmlFor="description">description</label>
        <textarea
          name="description"
          id="description"
          onChange={onDescriptionChange}
        />
        <label htmlFor="company">company</label>
        <input
          type="text"
          name="company"
          id="company"
          onChange={onCompanyChange}
        />
        <label htmlFor="company_logo">company logo</label>
        <input
          type="text"
          name="company_logo"
          id="company_logo"
          onChange={onCompany_logoChange}
        />
        <label htmlFor="role">role</label>
        <input type="text" name="role" id="role" onChange={onRoleChange} />
        <label htmlFor="tool">tool</label>
        <input type="text" name="tool" id="tool" onChange={handleIcons} />
        <button onClick={addIcons}>add</button>
        {tools.map((tool, index) => {
          return <p key={index}>{tool}</p>;
        })}
        <button type="submit">submit</button>
      </form>
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
    </Card>
  );
}

export default PreviusPositions;
