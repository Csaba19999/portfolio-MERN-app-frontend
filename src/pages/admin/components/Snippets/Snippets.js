import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Card from "../../../../shared/overlay/Card";
import classes from "./Snippets.module.css";

function Snippets() {
  const [technology, setTechnology] = useState("");
  const [version, setVersion] = useState("");
  const [technologyIcon, setTechnologyIcon] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [codes, setCodes] = useState([]);
  const [language, setLanguage] = useState("");

  const [codeTitle, setCodeTitle] = useState("");
  const [note, setCodeNote] = useState("");
  const [theCode, setTheCode] = useState("");

  const onTechnologyChange = (e) => {
    setTechnology(e.target.value);
  };
  const onVersionChange = (e) => {
    setVersion(e.target.value);
  };
  const onTechnologyIconChange = (e) => {
    setTechnologyIcon(e.target.value);
  };
  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onLanguageChange = (e) => {
    setLanguage(e.target.value);
  };
  const onCodesChange = (e) => {
    e.preventDefault();
    setCodes([
      ...codes,
      {
        codeTitle: codeTitle,
        note: note,
        theCode: theCode,
      },
    ]);
  };
  const onCodeTitleChange = (e) => {
    setCodeTitle(e.target.value);
  };
  const onCodeNoteChange = (e) => {
    setCodeNote(e.target.value);
  };
  const onTheCodeChange = (e) => {
    setTheCode(e.target.value);
  };

  const onSubmitHander = (e) => {
    e.preventDefault();
    console.log({
        technology: technology,
        version: version,
        technologyIcon: technologyIcon,
        title: title,
        description: description,
        likes: 0,
        date: date,
        code: codes,
        language: language,
        refresh_token: localStorage.getItem("refresh_token"),
      });
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        technology: technology,
        version: version,
        technologyIcon: technologyIcon,
        title: title,
        description: description,
        likes: 0,
        date: date,
        code: codes,
        language: language,
        refresh_token: localStorage.getItem("refresh_token"),
      }),
    };
    fetch(process.env.REACT_APP_BACKEND_ADMIN_API_KEY + "/snippet", options)
      .then((res) => {
        if (res.status === 200) {
          toast.success("added");
        } else {
          toast.error("error");
        }
        res.json();
      })
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
        }
      });
  };
  return (
    <Card title="Snippet" position="center" className={classes.snippets}>
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
        <label htmlFor="technology">technology</label>
        <input type="text" id="technology" onChange={onTechnologyChange} />
        <label htmlFor="version">version</label>
        <input type="text" id="version" onChange={onVersionChange} />
        <label htmlFor="technologyIcon">technology icon</label>
        <input
          type="text"
          id="technologyIcon"
          onChange={onTechnologyIconChange}
        />
        <label htmlFor="title">title</label>
        <input type="text" id="title" onChange={onTitleChange} />
        <label htmlFor="description">description</label>
        <textarea id="description" onChange={onDescriptionChange} />
        <label htmlFor="date">date</label>
        <input type="text" id="date" onChange={onDateChange} />
        <p>______Snippet______</p>
        <label htmlFor="code">code title</label>
        <input type="text" id="code" onChange={onCodeTitleChange} />
        <label htmlFor="code">code</label>
        <textarea type="text" id="code" onChange={onTheCodeChange} />
        <label htmlFor="note">note</label>
        <textarea type="text" id="note" onChange={onCodeNoteChange} />
        <button onClick={onCodesChange}>add code</button>
        <p>_________________</p>
        {codes.map((code, index) => {
          return (
            <div key={index}>
              <p>{code.codeTitle}</p>
              <p>{code.note}</p>
              <p>{code.theCode}</p>
            </div>
          );
        })}
        <p>_________________</p>
        <label htmlFor="language">language</label>
        <input type="text" id="language" onChange={onLanguageChange} />
        <button type="submit">submit</button>
      </form>
    </Card>
  );
}

export default Snippets;
