import React from "react";
import { Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Nav
      className="w-100 nav p-3 align-items-center fixed-top justify-content-center text-center"
      style={{}}
    >
      {/* <Col xs={1}>
        <SidebarhumbargerButton />
      </Col> */}
      <Col xs={1} className="mx-3">
        <Link to="/" className="fs-5" style={{}}>
          Home
        </Link>
      </Col>
      <Col xs={1} className="mx-3 w-auto">
        <Link to="/callUs" className="fs-5">
          Contact us
        </Link>
      </Col>
      <Col xs={4} className="mx-5">
        <input
          type="search"
          className="text-light w-100 py-2 px-4"
          placeholder="Search"
          style={{
            borderRadius: "none",
            backgroundColor: "#212529",
            outline: "none",
            border: "none",
            borderBottom: "2px solid #3f7489",
          }}
        />
      </Col>
    </Nav>
    // <Outlet />
    // </Row>
  );
}

export default NavBar;
