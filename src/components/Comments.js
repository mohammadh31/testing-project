import { Row } from "react-bootstrap";
import Loading from "./actions/loader/Loading";
import SingleComment from "./SingleComment";
import { useParams } from "react-router-dom";
import useAxios from "axios-hooks";

export default function Comments() {
  const { id } = useParams();
  const [{ data: getData, loading: getLoading, error: getError }, refetch] =
    useAxios(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`);

  if (getLoading) {
    return (
      <div className="my-5 mx-auto">
        <Loading />
      </div>
    );
  }
  if (getError) {
    return (
      <span>
        Error: {getError.message}11111111111 <button> {refetch}</button>
      </span>
    );
  }

  return (
    <div>
      <Row>
        <h1 className="text-center" style={{ color: "white" }}>
          The moste populer comments
          <hr />
        </h1>
      </Row>
      {getData.map((data) => (
        <Row key={data.id}>
          <SingleComment data={data} />
        </Row>
      ))}
    </div>
  );
}
