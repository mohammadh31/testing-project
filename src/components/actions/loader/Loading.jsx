import { Container } from "react-bootstrap";

const Loading = () => {
  return (
    <Container className=" d-flex justify-content-center align-items-center">
      <div className="loader d-flex justify-content-center align-content-center">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
    </Container>
  );
};
export default Loading;
