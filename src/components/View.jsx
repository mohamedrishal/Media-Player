import React, { useEffect, useState } from 'react'
import VideoCard from './VedioCard';
import { Row,Col } from 'react-bootstrap'
import {getAllVideos } from '../services/allAPI';


function View({uploadVideoServerResponse}) {

  const [allVideos,setAllVideos] = useState([])

  const [deleteVedioStatus,setDeleteVedioStatus] = useState(false)


  const getAllUploadedVideos = async ()=>{
    // make api call 
    const {data} = await getAllVideos()
    setAllVideos(data);
  }

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVedioStatus(false)

  },[uploadVideoServerResponse,deleteVedioStatus])


  // console.log(allVideos);

  return (
    <>
     <Row>

      {
        allVideos.length>0?
        allVideos.map(video=>(
          <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayData={video} setDeleteVedioStatus={setDeleteVedioStatus} />
          </Col>
        ))
        : <p className='fw-bolder fs-5 text-danger'>Nothing to display!!!</p>}
      
     </Row>
    </>
  )
}

export default View