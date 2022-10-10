import { useEffect } from "react";
import { useState } from "react";
import Card from "../../../../shared/overlay/Card";
import classes from "./FileManager.module.css";

function FileManager() {
  const [tools, setTools] = useState([]);
  const [logos, setLogos] = useState([]);
  const [refer, setRefer] = useState([]);

  const [location, setLocation] = useState("uploads");

  const [newFile, setNewFile] = useState(null);

  const onToolChange = (e) => {
    setNewFile(e.target.files[0]);
    setLocation("tools");
  };
  const onLogoChange = (e) => {
    setNewFile(e.target.files[0]);
    setLocation("logos");
  };
  const onReferChange = (e) => {
    setNewFile(e.target.files[0]);
    setLocation("refer");
  };

  const upload = async (e) => {
    e.preventDefault();
    if (!newFile) {
      console.log("No file selected");
      return;
    }
    let data;

    let formData = new FormData();

    formData.append("refresh_token", localStorage.getItem("refresh_token"));
    formData.append("file", newFile);
    formData.append("location", location);

    try {
      const options = {
        method: "POST",
        body: formData,
      };

      const endpoint = process.env.REACT_APP_BACKEND_ADMIN_ASSET_API_KEY + "/uploadFile";
      const response = await fetch(endpoint, options);
      data = await response.json();
    } catch (e) {
      console.log(e);
      return;
    }

    if (data.errorIfError) {
      console.log(data.errorIfError);
      return;
    }

    newFile.e.target.value = null;

    setNewFile(null);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch(process.env.REACT_APP_BACKEND_ADMIN_API_KEY + "/allfiles", options)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTools(data.tools);
        setLogos(data.logos);
        setRefer(data.refer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card
      title="file manager"
      position="center"
      className={classes.file_manager}
    >
      <h1>Tools</h1>
      <div className={classes.tools}>
        <div className={classes.images}>
          {tools.map((tool, index) => (
            <div className={classes.image}>
              <img
                src={tool}
                alt="tool"
                key={index+"_tool"}
                onClick={() => {
                  navigator.clipboard.writeText(tool);
                }}
              />
            </div>
          ))}
        </div>
        <form onSubmit={(e) => upload(e)}>
            <input type="file" onChange={onToolChange} />
            <button onClick={(e) => upload(e)}>upload</button>
          </form>
      </div>
      <h1>Logos</h1>
      <div className={classes.logos}>
        <div className={classes.images}>
          {logos.map((logo, index) => (
            <div className={classes.image}>
              <img
                src={logo}
                alt="logo"
                key={index+"_logo"}
                onClick={() => {
                  navigator.clipboard.writeText(logo);
                }}
              />
            </div>
          ))}
        </div>
        <form onSubmit={(e) => upload(e)}>
            <input type="file" onChange={onLogoChange} />
            <button onClick={(e) => upload(e)}>upload</button>
          </form>
      </div>
      <h1>referencia</h1>
      <div className={classes.referencia}>
        <div className={classes.images}>
          {refer.map((image, index) => (
            <div className={classes.image}>
              <img
                src={image}
                alt="refer"
                key={index+"_refer"}
                onClick={() => {
                  navigator.clipboard.writeText(image);
                }}
              />
            </div>
          ))}
        </div>
        <form onSubmit={(e) => upload(e)}>
            <input type="file" onChange={onReferChange} />
            <button onClick={(e) => upload(e)}>upload</button>
          </form>
      </div>
    </Card>
  );
}

export default FileManager;
