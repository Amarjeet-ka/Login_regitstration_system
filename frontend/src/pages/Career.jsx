import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Career = () => {
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState('');
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =
          'https://script.googleusercontent.com/macros/echo?user_content_key=K1SfY4XlD6qbGNRDMsv24cz3mKDQE1JnlXba9UCLupRXwydM0Op1uqTy30xeNrvvUZ3tB1EBxaMTecfjQO7WQuSb38Zru9Tpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnFi1RJg8_gr138n49tlr-w5BxUJAIqK7W6X7NVx3ShgSAsA1v_pBUqYNU_wxkU3NtlMVmRyvLlNSswX2mvP2NJZI5FO2_jdUbA&lib=M2imxiyfpXxrrry3zOH5XEyXcxPGDFq9z';

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Request failed');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data && filter) {
      const filtered = data.data.filter(
        (job) =>
          job.company_name.toLowerCase().includes(filter.toLowerCase()) ||
          job.location.toLowerCase().includes(filter.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(null);
    }
  }, [data, filter]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <div>
      <div style={{ marginTop:'10%',marginLeft:'20%',display: 'flex', alignItems: 'center' }}>
  <label htmlFor="filter" style={{ marginRight: '10px' }}>Filter:</label>
  <input type="text" id="filter" name="filter" value={filter} onChange={handleFilterChange} style={{ padding: '5px' }} />
</div>

        {data ? (
          <div className="job-list">
            {filteredData && filteredData.length > 0 ? (
              filteredData.map((job) => (
                <Container key={job.job_id}>
                  <Row>
                    <Col md={3} />
                    <Col md={6}>
                      <div className="job-card">
                        <h2 className="job-title">{job.title}</h2>
                        <p className="job-company">{job.company_name}</p>
                        <p className="job-location">{job.location}</p>
                        <p className="job-description">{job.description}</p>
                        <button className="job-apply-btn" style={{ color: 'white' }}>
                          <a href={job.posted_at} target="_blank" rel="noopener noreferrer">
                            Apply Now
                          </a>
                        </button>
                        <p className="job-salary">{job.salary}</p>
                      </div>
                    </Col>
                    <Col md={2} />
                  </Row>
                </Container>
              ))
            ) : (
              <p   >No jobs found for the provided filter.</p>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <Spinner animation="border" size="44px" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        <style>
          {`
            .job-list {
              display: grid;
              grid-gap: 20px;
            }

            .job-card {
              border: 1px solid #ccc;
              padding: 10px;
              background-color: #f3f3f3;
            }

            .job-title {
              font-size: 18px;
              font-weight: bold;
            }

            .job-company {
              font-size: 14px;
              color: black;
            }

            .job-location {
              font-size: 14px;
              margin-top: 5px;
            }

            .job-description {
              margin-top: 10px;
            }

            .job-posted {
              margin-top: 10px;
              font-size: 12px;
            }

            .job-salary {
              margin-top: 10px;
              font-size: 14px;
              font-weight: bold;
            }

            .job-apply-btn {
              display: inline-block;
              padding: 8px 16px;
              background-color: #007bff;
              color: black;
              text-decoration: none;
              font-size: 14px;
              font-weight: bold;
              border-radius: 4px;
              border: none;
              cursor: pointer;
            }

            .job-apply-btn:hover {
              background-color: #0056b3;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Career;
