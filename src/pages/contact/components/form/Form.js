import classes from "./Form.module.css";
import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function Form() {
  const [nameIsValid, setNameIsValid] = useState(true);
  const [enteredName, setEnteredName] = useState("");
  const [titlelIsValid, setTitleIsValid] = useState(true);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [messageIsValid, setMessageIsValid] = useState(true);
  const [enteredMessage, setEnteredMessage] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const nameInputRef = useRef();
  const titleInputRef = useRef();
  const messageInputRef = useRef();
  const emailInputRef = useRef();

  const formValiti = () => {
    let isError = false;
    if (enteredName.length >= 3 && enteredName.length <= 40) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
      isError = true;
    }

    if (enteredTitle.length >= 4 && enteredTitle.length <= 50) {
      setTitleIsValid(true);
    } else {
      setTitleIsValid(false);
      isError = true;
    }

    if (enteredMessage.length >= 15) {
      setMessageIsValid(true);
    } else {
      setMessageIsValid(false);
      isError = true;
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
      isError = true;
    }
    return isError;
  };

  const formClearUp = () => {
    //clear all input fields
    nameInputRef.current.value = "";
    titleInputRef.current.value = "";
    messageInputRef.current.value = "";
    emailInputRef.current.value = "";
    setEnteredName("");
    setEnteredTitle("");
    setEnteredMessage("");
    setEnteredEmail("");
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
    const isError = formValiti();
    if (isError) {
      return;
    } else {
      const emailSend = async () => {
        setIsLoading(true);
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
          process.env.REACT_APP_BACKEND_DEFAULT_API_KEY + "/contact";
        const response = await fetch(endpoint, options);
        if (response.status === 200) {
          toast.success("Üzenet elküldve!");
          formClearUp();
        } else {
          toast.error("Hiba a küldés során!");
        }
        setIsLoading(false);
      };
      emailSend();
    }
  };

  console.log(isLoading);

  return (
    <form className={`${classes.email_form}`} onSubmit={submitHandeler}>
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
      <section className={classes.name}>
        <label htmlFor="name">Név</label>
        <input
          ref={nameInputRef}
          onChange={handleNameChange}
          className={`${nameIsValid ? "" : classes.invalid}`}
          id="name"
          name="name"
          type="text"
          placeholder="Nagy Ádám"
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
          ref={titleInputRef}
          onChange={handleTitleChange}
          className={`${titlelIsValid ? "" : classes.invalid}`}
          id="title"
          name="title"
          type="text"
          placeholder="Állás ajánlat"
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
          ref={emailInputRef}
          onChange={handleEmailChange}
          className={`${emailIsValid ? "" : classes.invalid}`}
          id="email"
          name="email"
          placeholder="minta@gmail.com"
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
          ref={messageInputRef}
          onChange={handleMessageChange}
          className={`${messageIsValid ? "" : classes.invalid}`}
          name="message"
          id="message"
          placeholder="Üdv! Érdekelne a pozíció...?"
        ></textarea>
        {!messageIsValid && (
          <p className={`${messageIsValid ? "" : classes.invalidError}`}>
            Hibás tárgy (legalább 15 karakter)
          </p>
        )}
      </section>
      <button disabled={isLoading} className={`${classes.button}`} type="submit">
        Küldés
      </button>
    </form>
  );
}

export default Form;
