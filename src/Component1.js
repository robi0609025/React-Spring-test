import React from "react";
import { Spring } from "react-spring/renderprops";

function Component1() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 100, marginTop: 0 }}
    >
      {props => (
        <div style={props}>
          <div style={c1Style}>
            <h1>Component 1</h1>
            <body>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Spring
                from={{ number: 0 }}
                to={{ number: 10 }}
                config={{ duration: 10000 }}
              >
                {props => (
                  <div style={props}>
                    <h1 style={counter}>{props.number.toFixed()}</h1>
                  </div>
                )}
              </Spring>
            </body>
          </div>
        </div>
      )}
    </Spring>
  );
}

const c1Style = {
  background: "steelBlue",
  color: "white",
  padding: "1.5rem"
};

const counter = {
  background: "#333",
  textAlign: "centre",
  width: "60px",
  borderRadius: "50%",
  margin: "1rem auto"
};

export default Component1;
