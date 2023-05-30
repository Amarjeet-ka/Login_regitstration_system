import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Discussion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [discussionData, setDiscussionData] = useState([]);

  const handleSubmitQuestion = (event) => {
    event.preventDefault();

    const formData = {
      question: question,
      answers: [],
    };

    fetch("/api/submitQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      })
      .then((data) => {
        console.log(data);
        setQuestion("");
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmitAnswer = (questionId) => {
    const formData = {
      questionId: questionId,
      answer: answer,
    };

    fetch("/api/submitAnswer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      })
      .then((data) => {
        console.log(data);
        setAnswer("");
        fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchData = () => {
    fetch("/api/getDiscussion")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status: " + response.status);
        }
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setDiscussionData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <Container fluid style={{ marginTop: "5%" }}>
      <Row>
        <Col />
        <Col md={6}>
          <div
            style={{
              border: "1px solid white",
              textAlign: "center",
              backgroundColor: "#43b3fb",
              color: "white",
              borderRadius: "10px",
              padding: "20px",
              paddingLeft: "80px",
              paddingRight: "80px",
            }}
          >
            <form>
              <h2>Ask your question</h2>
              <input
                type="text"
                style={{
                  padding: "7px",
                  paddingRight: "40px",
                  paddingLeft: "40px",
                  borderRadius: "10px",
                }}
                placeholder="Question"
                value={question}
                onChange={handleQuestionChange}
              />
              <button
                onClick={handleSubmitQuestion}
                style={{
                  padding: "5px",
                  border: "1px solid white",
                  backgroundColor: "orange",
                  borderRadius: "10px",
                  marginLeft: "5%",
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <button onClick={fetchData}>Refresh</button>
          <div
            style={{
              overflowY: "scroll",
              height: "600px",
              width: "900px",
              marginBottom: "50px",
              marginTop: "20px",
              scrollBehavior: "smooth",
            }}
          >
        {/*    {discussionData && discussionData.length > 0 ? (
              (() => {
                const items = [];
                for (let i = 0; i < discussionData.length; i++) {
                  const item = discussionData[i];
                  items
                    .push ////  ////////////////////
                    ();
                }
                return items;
              })()
            ) : (
              <p>No discussion data available.</p>
            )}
            <div
              style={{
                borderRadius: "20px",
                marginTop: "30px",
                width: "700px",
                height: "fit-content",
                backgroundColor: "#4169e1",
                border: "1px solid white",
                textAlign: "center",
                padding: "10px",
              }}
            >
              <h3
                style={{
                  color: "white",
                  fontSize: "15px",
                  textAlign: "start",
                  paddingLeft: "20px",
                }}
              >  </h3>

              <input
                type="text"
                style={{
                  padding: "7px",
                  paddingRight: "40px",
                  paddingLeft: "40px",
                  borderRadius: "10px",
                }}
                placeholder="Answer"
                value={answer}
                onChange={handleAnswerChange}
              />
              <button
                onClick={() => handleSubmitAnswer}
                style={{
                  padding: "5px",
                  border: "1px solid white",
                  backgroundColor: "orange",
                  borderRadius: "10px",
                  marginLeft: "5%",
                  marginTop: "10px",
                }}
              >
                Submit Answer
              </button>
            </div>
              */}
          
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

export default Discussion;
