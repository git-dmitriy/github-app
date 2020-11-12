import React from "react";
import { Link } from "react-router-dom";

export const Card = () => (
  <div className="card">
    <div className="card-body">
      <img src={""} alt={""} className="card-img-top" />
      <h5 className="card-title">User Name</h5>
      <Link to={`/propfile/id`} className="btn btn-primary">
        Открыть
      </Link>
    </div>
  </div>
);
