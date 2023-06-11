import Table from "react-bootstrap/Table";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?results=25")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userdata = data.results;
        setUser(userdata);
        setIsLoading(false);
      });
  };

  const fetchDataMale = () => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?gender=male")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userdata = data.results;
        setUser(userdata);
        setIsLoading(false);
      });
  };

  const fetchDataFeMale = () => {
    setIsLoading(true);
    fetch("https://randomuser.me/api/?gender=female")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let userdata = data.results;
        setUser(userdata);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        {isLoading ? (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="pt-4">
            <div className="text-center">
              <h2 className="ProjectTitle">Random User Data</h2>
             <h4>Select Male and Female Filter</h4> <Button
                className="btn btn-lg"
                variant="dark"
                onClick={fetchDataMale}
                disabled={isLoading}
              >
                Male
              </Button>
              <Button
                className="btn btn-lg"
                variant="dark"
                onClick={fetchDataFeMale}
                disabled={isLoading}
              >
                Female
              </Button>
              <Table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                  </tr>
                </thead>
              </Table>
            </div>

            {user.map((data) => (
              <div className="center-card">
                <div className="">
                  <div className="" key={data.id.value}></div>
                  <Table striped bordered hover>
                    <tbody>
                      <tr>
                        <td>
                          <img src={data.picture.large} alt="1" />
                        </td>
                        <td>{data.name.first + " " + data.name.last}</td>
                        <td>{data.email}</td>
                        <td>{data.gender}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
            ))}
            <div className="text-center">
              
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
