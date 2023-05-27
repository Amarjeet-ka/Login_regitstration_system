import React from "react";

const Homegrid = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginLeft: '30%',
        marginTop: '10%',
        width: "300px",
        height: "200px",
        border: "1px solid black",
        backgroundColor: 'gray',
        padding: "20px",
      }}
    >
      <h3>Links:</h3>
      <ul>
        <li>
          <a
            href="/community"
            style={{
              color: 'blue',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            Community
          </a>
        </li>
        <li>
          <a
            href="/resource"
            style={{
              color: 'blue',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
      Resource Hub
          </a>
        </li>
        <li>
          <a
            href="/skills"
            style={{
              color: 'blue',
              textDecoration: 'none',
              fontSize: '14px',
            }}
          >
        Skill development
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Homegrid;
