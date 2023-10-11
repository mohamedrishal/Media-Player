import React from "react";
import { Link } from "react-router-dom";

function WatchHistory() {
  return (
    <>
      <div className="container mt-5 m-5 d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link
          to={"/home"}
          className="text-decoration-none fs-5 text-secondary d-flex align-items-center ">
          <i class="fa-solid fa-arrow-left fa-beat-fade me-3"></i> Back to Home
        </Link>
      </div> 
      <table className="table mt-5 mb-5 container">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>Time Stamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kanban</td>
            <td>
              <a href="https://fontawesome.com/">https://fontawesome.com/</a>
            </td>
            <td>4/10/23</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default WatchHistory;
