import React from "react";

export default function TextForm(props) {
  const [text, setText] = React.useState("");
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleOnClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "success");
  };
  const handleOnCopy = () => {
    let text = document.getElementById("myBox").value;
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard", "success");
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase}>
          Convert to LoweCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          Your Text has {text.split(" ").length} words and {text.length}{" "}
          characters.
        </p>
        <p> Time to read: {0.008 * text.split(" ").length}minutes</p>
        <h2>{text.length > 0 ? "Preview" : "Enter Something to Preview"}</h2>
        <p> {text} </p>
      </div>
    </>
  );
}
