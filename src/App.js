import { useState, useEffect } from "react";
import * as toxicity from "@tensorflow-models/toxicity";
import Container from "@mui/material/Container";
import InputField from "./components/InputField";
import CommentList from "./components/CommentList";
import Header from "./components/Header";
import { Oval } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

function App() {
  const [comment, setComment] = useState();
  const [commentList, setCommentList] = useState([]);

  // TENSORFLOW MODEL
  const [model, setModel] = useState();
  const [predictions, setPredictions] = useState(null);

  async function loadModel() {
    const threshold = 0.9;
    const toxicityModel = await toxicity.load(threshold);
    setModel(toxicityModel);
    console.log("model loaded");
  }

  useEffect(() => {
    loadModel();
  }, []);

  async function handleClassify() {
    if (model !== null) {
      if (comment === "") {
        toast.warn("Please enter some text");
      } else {
        await model.classify(comment).then((predictions) => {
          setPredictions(predictions);
          setCommentList((prev) => [
            ...prev,
            { id: new Date().getTime(), comment, predictions },
          ]);
        });
      }
    }
    setComment("");
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClassify();
    }
  };

  if (model == null) {
    return (
      <div className="loader">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  } else {
    return (
      <Container className="ttd__container">
        <div className="ttd__input-title-wrapper">
          <Header />
          <ToastContainer />
          <InputField
            comment={comment}
            setComment={setComment}
            handleClassify={handleClassify}
            handleKeyDown={handleKeyDown}
          />
        </div>
        <CommentList commentList={commentList?.reverse()} />
      </Container>
    );
  }
}

export default App;
