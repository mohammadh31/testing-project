import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Footer from "./components/Footer";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Comments from "./components/Comments.js";
import NavBar from "./components/Navbar";
import PostList from "./components/PostList";
import NoPage from "./components/NoPage";
import Users from "./components/Users.js";
import Loading from "./components/actions/loader/Loading.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
import Sidebar from "./components/Sidebar/Sidebar.js";

const queryClient = new QueryClient();
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {loading ? (
          <div
            className="d-flex align-items-center"
            style={{ height: "100vh", width: "100vw" }}
          >
            <Loading />
          </div>
        ) : (
          <div>
            <BrowserRouter>
              <Row className="m-auto">
                <NavBar />
              </Row>
              <Row className="container mt-xxl-5 m-auto" style={{}}>
                <Col xs={2} style={{ backgroundColor: "#1a1e21" }}>
                  <Sidebar />
                </Col>
                <Col
                  className="m-auto container my-1 p-5"
                  style={{
                    borderLeft: "4px solid var(--border)",
                    borderRight: "4px solid var(--border)",
                  }}
                >
                  <Routes>
                    <Route index element={<Home />} />
                    <Route path="/postList" element={<PostList />} />
                    <Route path="/users" element={<Users />} />
                    <Route path="/posts/:id/comments" element={<Comments />} />
                    <Route path="/callUs" element={<ContactUs />} />
                    <Route path="*" element={<NoPage />} />
                  </Routes>
                </Col>
              </Row>
            </BrowserRouter>
            <Row className="justify-content-center">
              <Footer />
            </Row>
          </div>
        )}
      </QueryClientProvider>
    </div>
  );
}

export default App;
