import { Row } from "react-bootstrap";
import Loading from "./actions/loader/Loading";
import SingleCard from "./SingleCard";
import useAxios from "axios-hooks";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();

  const [{ data: getData, loading: getLoading, error: getError }] = useAxios({
    method: "GET",
    url: `https://jsonplaceholder.typicode.com/posts`,
  });
  const [
    { data: putData, loading: postLoading, error: postError },
    executePut,
  ] = useAxios(
    {
      method: "PUT",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    },
    {
      manual: true,
    }
  );
  const [
    { data: deleteData, loading: deleteLoading, error: deleteError },
    executeDelete,
  ] = useAxios(
    {
      method: "DELETE",
      url: `https://jsonplaceholder.typicode.com/posts/${id}`,
    },
    {
      manual: true,
    }
  );

  function replacedData() {
    executePut({
      data: {
        ...putData,
        updatedAt: new Date().toISOString(),
      },
    });
  }
  function deletedData(event) {
    event.preventDefault();
    executeDelete({
      data: {
        ...deleteData,
        updatedAt: new Date().toISOString(),
      },
    });
  }
  if (getLoading || postLoading || deleteLoading) {
    return (
      <div className="my-5 mx-auto" style={{ height: "70vh" }}>
        <Loading />
      </div>
    );
  }
  if (getError || postError || deleteError) {
    return (
      <span className="text-center text-light fs-1">{getError.message}</span>
    );
  }
  // console.log(deleteData);

  return (
    <div className="">
      <Row>
        <h1 className="text-center" style={{ color: "white" }}>
          The moste populer posts
          <hr />
        </h1>
      </Row>
      {getData.map((data) => (
        <Row id={"post" + data.id} key={data.id}>
          <SingleCard
            deletedData={deletedData}
            replacedData={replacedData}
            data={data}
          />
        </Row>
      ))}
    </div>
  );
};
export default Post;
