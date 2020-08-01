import React from "react";
import { Spring } from "react-spring/renderprops";

function Component2() {
  const c2Style = {
    background: "slateBlue",
    color: "white",
    padding: "1.5rem"
  };
  return (
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ delay: 1000, duration: 500 }}
    >
      {props => (
        <div style={props}>
          <div style={c2Style}>
            <h1>Component 2</h1>
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
            </body>
          </div>
        </div>
      )}
    </Spring>
  );
}

export default Component2;
