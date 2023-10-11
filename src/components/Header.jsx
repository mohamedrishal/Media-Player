import React from 'react'
import { Navbar,Container } from 'react-bootstrap'

function Header() {
  return (
    <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <link 
                to={"/"}
                className='fs-4'
                style={{textDecoration:"none" , color:"white" }}
            />
          <i class="fa-solid fa-cloud-arrow-up fa-beat"></i>  Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header