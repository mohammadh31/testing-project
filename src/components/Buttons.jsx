import { Button } from "react-bootstrap";

export default  function Buttons(data) {
  return (
    <Button
      key={data.data.id}
      className="fs-6"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      {data.data.name}
    </Button>
  );
}
