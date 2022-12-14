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
          toast.success("??zenet elk??ldve!");
          formClearUp();
        } else {
          toast.error("Hiba a k??ld??s sor??n!");
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
        <label htmlFor="name">N??v</label>
        <input
          ref={nameInputRef}
          onChange={handleNameChange}
          className={`${nameIsValid ? "" : classes.invalid}`}
          id="name"
          name="name"
          type="text"
          placeholder="Nagy ??d??m"
        />
        {!nameIsValid && (
          <p className={`${nameIsValid ? "" : classes.invalidError}`}>
            Hib??s n??v (3-40 karakter)
          </p>
        )}
      </section>
      <section className={classes.title}>
        <label htmlFor="title">T??rgy</label>
        <input
          ref={titleInputRef}
          onChange={handleTitleChange}
          className={`${titlelIsValid ? "" : classes.invalid}`}
          id="title"
          name="title"
          type="text"
          placeholder="??ll??s aj??nlat"
        />
        {!titlelIsValid && (
          <p className={`${titlelIsValid ? "" : classes.invalidError}`}>
            Hib??s t??rgy (4-50 karakter)
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
            Hib??s e-mail c??m
          </p>
        )}
      </section>
      <section className={classes.message}>
        <label htmlFor="message">??zenet</label>
        <textarea
          ref={messageInputRef}
          onChange={handleMessageChange}
          className={`${messageIsValid ? "" : classes.invalid}`}
          name="message"
          id="message"
          placeholder="??dv! ??rdekelne a poz??ci??...?"
        ></textarea>
        {!messageIsValid && (
          <p className={`${messageIsValid ? "" : classes.invalidError}`}>
            Hib??s t??rgy (legal??bb 15 karakter)
          </p>
        )}
      </section>
      <button disabled={isLoading} className={`${classes.button}`} type="submit">
        K??ld??s
      </button>
    </form>
  );
}

export default Form;
