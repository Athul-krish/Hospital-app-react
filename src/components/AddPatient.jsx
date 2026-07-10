import React from "react";
import Navbar from "./Navbar";

const AddPatient = () => {
  return (
    <div>
        <Navbar/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">

            <div className="row g-3">

              {/* Patient ID */}
              <div className="col-12 col-md-6">
                <label className="form-label">Patient ID</label>
                <input type="text" className="form-control" />
              </div>

              {/* Full Name */}
              <div className="col-12 col-md-6">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" />
              </div>

              {/* Age */}
              <div className="col-12 col-md-6">
                <label className="form-label">Age</label>
                <input type="number" className="form-control" />
              </div>

              {/* Gender */}
              <div className="col-12 col-md-6">
                <label className="form-label d-block">Gender</label>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                  />
                  <label className="form-check-label" htmlFor="male">
                    Male
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                  />
                  <label className="form-check-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>

              {/* Blood Group */}
              <div className="col-12 col-md-6">
                <label className="form-label">Blood Group</label>
                <select className="form-select">
                  <option>Select Blood Group</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>

              {/* Mobile Number */}
              <div className="col-12 col-md-6">
                <label className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" />
              </div>

              {/* Email */}
              <div className="col-12 col-md-6">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control" />
              </div>

              {/* Disease */}
              <div className="col-12 col-md-6">
                <label className="form-label">
                  Disease / Health Complaint
                </label>
                <input type="text" className="form-control" />
              </div>

              {/* Doctor */}
              <div className="col-12 col-md-6">
                <label className="form-label">Doctor Assigned</label>
                <input type="text" className="form-control" />
              </div>

              {/* Admission Date */}
              <div className="col-12 col-md-6">
                <label className="form-label">Admission Date</label>
                <input type="date" className="form-control" />
              </div>

              {/* Room Number */}
              <div className="col-12 col-md-6">
                <label className="form-label">Room Number</label>
                <input type="text" className="form-control" />
              </div>

              {/* Address */}
              <div className="col-12">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  rows="4"
                ></textarea>
              </div>

              {/* Button */}
              <div className="col-12 text-center mt-3">
                <button className="btn btn-success">
                  Register Patient
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatient;