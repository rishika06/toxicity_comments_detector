import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Header() {
  const [state, setState] = useState({ right: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="ttd__header-wrapper">
      <div className="ttd__title">Text Toxicity Detector</div>
      {["right"].map((anchor) => (
        <div key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            style={{ color: "black", fontWeight: "600" }}
          >
            About
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            <Box width={500} className="ttd__drawer-wrapper">
              <h4>About Text Toxicity Detector Project</h4>
              <p>
                The <b>Text Toxicity Detector</b> project has been built using
                React, Material UI and{" "}
                <a href="https://www.tensorflow.org/js" target="_blank">
                  TensorFlow.js
                </a>{" "}
                library.
              </p>
              <p>
                <a href="https://www.tensorflow.org/js" target="_blank">
                  TensorFlow.js
                </a>{" "}
                is a library for machine learning in JavaScript developed by
                Google.
              </p>
              <p>
                This project uses the{" "}
                <a href="https://www.tensorflow.org/js/models" target="_blank">
                  “Text toxicity detection”
                </a>{" "}
                model which detects whether the provided text contains toxic
                content such as threatening language, insults, obscenities,
                identity-based hate, or sexually explicit language.
              </p>
              <p>
                The project has been built to demo to a simple Comment Section
                feature that can be part of any platform.
              </p>
              <p>
                When a person types in any comment which contains some
                inappropriate words or phrases, the model returns few parameters
                as true or false. Based on these results a small chip below the
                comment is highlighted with{" "}
                <span style={{ color: "green" }}>green</span> meaning false or
                <span style={{ color: "red" }}> red</span> meaning true.
              </p>
            </Box>
          </Drawer>
        </div>
      ))}
    </div>
  );
}

export default Header;
