import React from "react";
import Alert from "react-bootstrap/Alert";
import { FaArrowRight } from "react-icons/fa";

const Homegrid = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginLeft: "10%",
        marginTop: "10%",
        width: "500px",
        justifyItems: "space-between",
        paddingTop: "30px",
        height: "500px",
        listStyleType: "none",
        border: "1px solid white",
        borderRadius: "15px",
        backgroundColor: "#ff9e01",
        padding: "20px",
      }}
    >
   <Alert style={{ backgroundColor: "#43b3fb" }}>
        <li>
          <a
            href="/community"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Community <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#43b3fb" }}>
        <li>
          <a
            href="/resource"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Resource Hub <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#43b3fb" }}>
        <li>
          <a
            href="/skills"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Skill development <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#43b3fb" }}>
        <li>
          <a
            href="/career"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "26px",
            }}
          >
            Career Exploration <FaArrowRight />
          </a>
        </li>
      </Alert>

      <Alert style={{ backgroundColor: "#43b3fb" }}>
        <li>
          <a
            href="/personal"
            style={{
              color: "white",
              textDecoration: "none",

              fontSize: "26px",
            }}
          >
            Personalized learning <FaArrowRight />
          </a>
        </li>
      </Alert>
    </div>
  );
};

export default Homegrid;
