import React, { useState } from "react";
import Add from "../components/Add";
import Category from "../components/Category";
import View from "../components/View";
import { Link} from "react-router-dom";





function Home() {

  const [uploadVideoServerResponse,setUploadVideoServerResponse] = useState({})

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="add-videos">
          <Add setUploadVideoServerResponse={setUploadVideoServerResponse} />
        </div>
        <Link
          to={"/watch-history"}
          style={{ textDecoration: "none", color: "white" }}
        >
          Watch History
        </Link>
      </div>
      <div className="container-fluid w-100 mt-5 mb-5 d-flex justify-content-between">
        <div className="all-videos col-lg-9">
          <h3>All videos</h3>
          <View  uploadVideoServerResponse={uploadVideoServerResponse} />
        </div>
        <div className="caregory col-lg-3">
          <Category />
        </div>
      </div>
    </>
  );
}

export default Home;
