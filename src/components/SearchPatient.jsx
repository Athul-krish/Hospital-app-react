import React from "react";
import Navbar from "./Navbar";

const SearchPatient = () => {
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
                <button className="btn btn-primary w-100">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPatient;