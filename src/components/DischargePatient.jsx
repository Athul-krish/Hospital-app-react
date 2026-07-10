import React from "react";
import Navbar from "./Navbar";

const DischargePatient = () => {
  return (
    <div>
        <Navbar/>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12">
            <div className="row g-3 align-items-end">
              <div className="col-12 col-md-8">
                <label className="form-label">Patient ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Patient ID"
                />
              </div>
              <div className="col-12 col-md-4">
                <button className="btn btn-danger w-100">
                  Discharge
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DischargePatient;