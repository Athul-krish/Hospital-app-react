import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const ViewAll = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json",
      )
      .then((response) => {
        setData(response.data);
      })
      .catch();
  };



  useEffect(() => {
    fetchData();
  }, [])

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Patient ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Blood Group</th>
                    <th>Doctor</th>
                    <th>Room</th>
                    <th>Mobile</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((value, index) => (
                    <tr key={index}>
                      <td>{value.patientId}</td>
                      <td>{value.name}</td>
                      <td>{value.age}</td>
                      <td>{value.gender}</td>
                      <td>{value.bloodGroup}</td>
                      <td>{value.doctor}</td>
                      <td>{value.roomNo}</td>
                      <td>{value.mobile}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewAll;
