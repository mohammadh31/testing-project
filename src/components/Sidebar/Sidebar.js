import { Row } from "react-bootstrap";
import Buttons from "../Buttons";
import { Link } from "react-router-dom";

function Sidebar() {
  const getData = [
    {
      id: 1,
      name: "Users",
      link: "users",
    },
    { id: 2, name: "posts", link: "postList" },
  ];

  return (
    <Row className="mt-5 text-center">
      {getData.map((data) => (
        <Link key={data.id} to={`/${data.link}`} className="sideBarButton">
          <Buttons data={data} />
        </Link>
      ))}
    </Row>
  );
}

export default Sidebar;
