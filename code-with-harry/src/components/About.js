import React from "react";

export default function About() {
  return (
    <div>
      <div className="accordion my-3" id="accordionExample">
        <h1>About Us</h1>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Text Utils App
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>
                <strong>
                  Created with the help of code-with-harry react tutorials
                </strong>{" "}
              </p>
              This is a simple text utility app that allows you to manipulate
              text in various ways.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              The application can be used to convert text to uppercase,
              lowercase, remove extra spaces, copy text to clipboard, and clear
              the textand count the number of words and characters in the text.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
