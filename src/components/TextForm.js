import React, { useState } from "react";

export const TextForm = (props) => {
  const [text, setText] = useState("");

  const onChangeHandler = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  const upperCaseHandler = () => {
    if (text) {
      const UpperCaseText = text.toUpperCase();
      setText(UpperCaseText);
      props.displayAlert("Text copied to clipboard !", "success", "warning");
    } else {
      props.displayAlert("Please enter some text !!", "error", "danger");
    }
  };

  const lowerCaseHandler = () => {
    if (text) {
      const LowerCaseText = text.toLowerCase();
      setText(LowerCaseText);
      props.displayAlert("Text copied to clipboard !", "success", "warning");
    } else {
      props.displayAlert("Please enter some text !!", "error", "danger");
    }
  };

  const copyHandler = () => {
    if (text) {
      navigator.clipboard.writeText(text);
      props.displayAlert("Text copied to clipboard !", "success", "primary");
    } else {
      props.displayAlert("Please enter some text !!", "error", "danger");
    }
  };

  const clearHandler = () => {
    if (text) {
      setText("");
      props.displayAlert("Text cleared !", "success", "info");
    } else {
      props.displayAlert("Please enter some text !!", "error", "danger");
    }
  };

  const wordCount = (text) => {
    return text.split(/\s+/).filter((char) => {
      return char.length !== 0;
    }).length;
  };

  const charCount = (text) => {
    return text.length;
  };

  const readTime = (text) => {
    const timeValue = Math.round(wordCount(text) * 0.008);
    if (timeValue === 0) {
      return "Less than a min";
    }
    return timeValue + " min";
  };
  return (
    <>
      <div className={`container my-5 ${props.textMode}`}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          onChange={onChangeHandler}
        ></textarea>
        <button
          className={`btn btn-${props.utilColor} my-2 mx-2`}
          onClick={upperCaseHandler}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-${props.utilColor} my-2 mx-2`}
          onClick={lowerCaseHandler}
        >
          Convert to Lowercase
        </button>
        <button className="btn btn-success my-2 mx-2" onClick={copyHandler}>
          Copy Text
        </button>
        <button className="btn btn-danger my-2 mx-2" onClick={clearHandler}>
          Clear Text
        </button>
      </div>
      <div className={`container my-3 ${props.textMode}`}>
        <h1>Text Summary:</h1>
        <p>
          {text ? wordCount(text) : 0} words and {charCount(text)} characters
        </p>
        <p>Readtime ~ {readTime(text)}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
};
