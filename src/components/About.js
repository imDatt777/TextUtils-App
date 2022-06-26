import React from "react";

export const About = (props) => {
  return (
    <div className="container">
      <h1 className={`my-3 ${props.textMode}`}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className={`accordion-item bg-${props.mode} `}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${props.accordColor} ${props.textMode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Upper Case Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${props.textMode}`}>
              This is the <strong>first text utility</strong> to be implemented
              here. The text entered in the text area is converted into{" "}
              <code>Uppercase Scheme</code> irrespective of the flow and nature
              of the written text material.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode} `}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button collapsed ${props.accordColor} ${props.textMode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lower Case Text
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${props.textMode}`}>
              This is the <strong>second text utility</strong> to be implemented
              here. The text entered in the text area is converted into
              <code>Lowercase Scheme</code> irrespective of the flow and nature
              of the written text material.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode} `}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button collapsed ${props.accordColor} ${props.textMode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Copy Text
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${props.textMode}`}>
              This is the <strong>third text utility</strong> to be implemented
              here. The text entered in the text area is copied to clipboard and
              can be simply pasted anywhere.
            </div>
          </div>
        </div>
        <div className={`accordion-item bg-${props.mode} `}>
          <h2 className="accordion-header" id="headingFour">
            <button
              className={`accordion-button collapsed ${props.accordColor} ${props.textMode}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Clear Text
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className={`accordion-body ${props.textMode}`}>
              This is the <strong>fourth text utility</strong> to be implemented
              here. The text entered in the text area can be cleared with a
              single click.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
