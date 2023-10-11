import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Modal } from "react-bootstrap";
import { deleteAVideos } from "../services/allAPI";

function VedioCard({displayData,setDeleteVedioStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeVideo = async (id)=>{
    // make api call 
    const response = await deleteAVideos(id)
    setDeleteVedioStatus(true);

  }

  return (
    <>
    {
      displayData && 
      
      <Card className="mb-3">
        <Card.Img
          height={'180px'}
          onClick={handleShow}
          variant="top"
          src={displayData?.url}
        />
        <Card.Body>
          <Card.Title className="d-flex justify-content-between align-items-center">
            <h6>{displayData?.caption}</h6>
            <button onClick={()=>removeVideo(displayData?.id)} className="btn">
              <i className="fa-solid fa-trash text-danger"></i>
            </button>
          </Card.Title>
        </Card.Body>
      </Card>

    }
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vedio Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width={"100%"}
            height="360"
            src={`${displayData?.embedLink}?autoplay=1`}
            title={displayData?.caption}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VedioCard;
