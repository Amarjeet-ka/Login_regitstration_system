import React, { useState } from "react";

function Discussion() {
  const [question, setQuestion] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Create a new object with the form data
    const formData = {
      question: question,
    };

    // Send the form data to the backend
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
        console.log(data); // Optional: Log the response from the backend
        // Reset the form after successful submission
        setQuestion("");
      })
      .catch((error) => {
        console.error(error); // Optional: Handle error responses
      });
  };

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div>
      <form>
        <h2>Ask your question</h2>
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Discussion;
