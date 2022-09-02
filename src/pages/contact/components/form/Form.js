import classes from "./Form.module.css";
import { useEffect, useState } from "react";

function Form() {
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredName, setEnteredName] = useState("");
  const [titlelIsValid, setTitleIsValid] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(true);
  const [enteredMessage, setEnteredMessage] = useState("");
  const [rerenderCounter, setRerenderCounter] = useState(0);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);

  useEffect(() => {
    if (rerenderCounter >= 1) {
      formValiti();
    }
    setRerenderCounter(rerenderCounter + 1);
  }, [messageIsValid, titlelIsValid, nameIsValid]);

  const formValiti = () => {
    if (enteredName.length >= 3 && enteredName.length <= 40) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }

    if (enteredTitle.length >= 4 && enteredTitle.length <= 50) {
      setTitleIsValid(true);
    } else {
      setTitleIsValid(false);
    }

    if (enteredMessage.length >= 15) {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
    }

    if (
      enteredEmail
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };

  const handleNameChange = (event) => {
    setEnteredName(event.target.value);
  };
  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };
  const handleMessageChange = (event) => {
    setEnteredMessage(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    formValiti();
    if (
      nameIsValid === false ||
      titlelIsValid === false ||
      messageIsValid === false ||
      emailIsValid === false
    ) {
      console.log("Error");
      return;
    } else {
      const emailSend = async () => {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: enteredName,
            title: enteredTitle,
            email: enteredEmail,
            message: enteredMessage,
          }),
        };

        const endpoint =
        process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/contact"; ///change to env
        const response = await fetch(endpoint, options);
      };
      emailSend();
    }
  };

  return (
    <form className={`${classes.email_form}`} onSubmit={submitHandeler}>
      <section className={classes.name}>
        <label htmlFor="name">Név</label>
        <input
          onChange={handleNameChange}
          className={`${nameIsValid ? "" : classes.invalid}`}
          id="name"
          name="name"
          type="text"
          placeholder="Name"
        />
        {!nameIsValid && (
          <p className={`${nameIsValid ? "" : classes.invalidError}`}>
            Hibás név (3-40 karakter)
          </p>
        )}
      </section>
      <section className={classes.title}>
        <label htmlFor="title">Tárgy</label>
        <input
          onChange={handleTitleChange}
          className={`${titlelIsValid ? "" : classes.invalid}`}
          id="title"
          name="title"
          type="text"
          placeholder="Subject"
        />
        {!titlelIsValid && (
          <p className={`${titlelIsValid ? "" : classes.invalidError}`}>
            Hibás tárgy (4-50 karakter)
          </p>
        )}
      </section>
      <section className={classes.email}>
        <label htmlFor="email">E-mail</label>
        <input
          onChange={handleEmailChange}
          className={`${emailIsValid ? "" : classes.invalid}`}
          id="email"
          name="email"
          placeholder="Email"
        />
        {!emailIsValid && (
          <p className={`${emailIsValid ? "" : classes.invalidError}`}>
            Hibás e-mail cím
          </p>
        )}
      </section>
      <section className={classes.message}>
        <label htmlFor="message">Üzenet</label>
        <textarea
          onChange={handleMessageChange}
          className={`${messageIsValid ? "" : classes.invalid}`}
          name="message"
          id="message"
          placeholder="Message"
        ></textarea>
        {!messageIsValid && (
          <p className={`${messageIsValid ? "" : classes.invalidError}`}>
            Hibás tárgy (legalább 15 karakter)
          </p>
        )}
      </section>
      <button className={`${classes.button}`} type="submit">
        Küldés
      </button>
    </form>
  );
}

export default Form;
