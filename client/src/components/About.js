import React from "react";

export default function About() {
  return (
    <div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <h5>Description</h5>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>To Do List</strong> The definition is a simple one. It's a
              list of tasks you need to complete, or things that you want to do.
              Most typically, they're organised in order of priority.
              Traditionally, they're written on a piece of paper or post it
              notes and acts as a memory aid.<br></br>
              It makes our tasks that are yet to do in an organised way and it
              also helps in fighting procrastination of tasks. And increases
              your productivity in great extent
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h5>Benefits</h5>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Improves your memory: A to do list acts as an external memory aid.
              ... <br />
              Increases productivity: A to do list allows you to prioritize the
              tasks that are more important. ...<br />
               Helps with motivation: To do
              lists are a great motivational tool because you can use them to
              clarify your goals.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <h5>Contact us</h5>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>EMAIL's :</strong><br />
              snidhin1729@gmail.com <br />
              tasmaird@gmail.com <br />
              rajeshmm5321@gmail.com <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
