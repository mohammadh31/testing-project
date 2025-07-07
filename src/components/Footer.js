import React from "react";
import { MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="text-center text-white container-fluid footer1">
      <Container className="p-4 pb-0">
        <section className="mb-4">
          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="/"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="#!"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="/"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="/"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="dark"
            floating
            className="m-1"
            href="/"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © Copyright:{" "}
        <a className="text-white" href="/">
          Mohammad Haoaj
        </a>
      </div>
    </footer>
  );
}
