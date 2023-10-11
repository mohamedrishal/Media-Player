import React, { useState } from "react";
import { Modal, Button,Form } from "react-bootstrap";
import { uploadVideo } from "../services/allAPI";

function Add({setUploadVideoServerResponse}) {

  const [video,setVideo] = useState({ id:"", caption:"", url:"", embedLink:"" })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getEmbedLink = (e)=>{
    
    const {value} = e.target

    if(value){
      const link = `https://www.youtube.com/embed/${value.slice(-11)}`
      setVideo({...video,embedLink:link})
    }else{
      setVideo({...video,embedLink:""})
    }
  }

  // console.log(video);

  const  handleUpload = async ()=>{

    const {id,caption,url,embedLink} = video
    
    if(!id || !caption || !url || !embedLink){
      alert("Please fill the form Completely..!!")
    }else{
        // make api call UploadVideo
         const response = await uploadVideo(video)
         console.log(response);
         if(response.status>=200 && response.status<300){
          alert(`${response.data.caption} vedio uploaded Successfully!!!` )
          // set Server response
          setUploadVideoServerResponse(response.data)
          // hide Modal
          handleClose()
         }else{
          // console.log(response);
          alert("Can't perform the Operation now. Please try after some time..")


         }
    }
 
  }

  return (
    <>
      <div className="d-flex align-items-center">
        <h5>Upload New Video</h5>
        <button onClick={handleShow} className="btn">
          <i className="fs-5" class="fa-solid fa-circle-plus"></i>
        </button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please Fill the following details !!! </p>
          <Form className="border border-secondary rounded p-3">

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video ID" onChange={(e)=>setVideo({...video,id:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video Caption"  onChange={(e)=>setVideo({...video,caption:e.target.value})}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter video Image URL"  onChange={(e)=>setVideo({...video,url:e.target.value})}  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter Youtube video Link" onChange={getEmbedLink} />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
