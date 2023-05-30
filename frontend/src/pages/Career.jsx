import React, { useEffect, useState } from "react";

const Career = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('/api/v1/api/jobs/in/search/1?app_id={d6828832}&app_key={9e62f46d0f31b6d6b4cf8af8d3b22881}')
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.results);
      })
      .catch((error) => {
        console.log('Error fetching job data: ', error);
      });
  }, []);
  
  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>Location: {job.location.display_name}</p>
            <p>Salary: {job.salary}</p>
            <p>Company: {job.company.display_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Career;
