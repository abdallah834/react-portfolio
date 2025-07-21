import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import PageTitle from "../PageTitle/PageTitle";
export default function Contact() {
  const [hiddenLabel, setHiddenLabel] = useState("hidden-label");
  return (
    <>
      <PageTitle title="Contact" />
      <div className="contact-section d-flex justify-content-center align-items-center">
        <Container className="">
          <h2 className="text-center text-uppercase fw-bold mt-5 text-black">
            contact component
          </h2>
          <div className="badge-container d-flex justify-content-center align-items-center pt-4">
            <div className="line me-2 bg-black"></div>
            <i className="fa-solid fa-star text-black"></i>
            <div className="line ms-2 bg-black"></div>
          </div>
          <div className="input-container d-flex flex-column justify-content-center align-items-center w-100">
            <div className="input-fields d-flex flex-column gap-4 w-75">
              <Form.Group className="mb-3" controlId="formGroupName">
                <div className="label-container m-0">
                  <Form.Label className={hiddenLabel}>User Name:</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  onInput={(e) =>
                    e.target.value !== ""
                      ? setHiddenLabel("form-label")
                      : setHiddenLabel("hidden-label")
                  }
                  className="input-field"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupAge">
                <div className="label-container">
                  <Form.Label className={hiddenLabel}>User age:</Form.Label>
                </div>
                <Form.Control
                  type="text"
                  placeholder="Enter age"
                  onInput={(e) =>
                    e.target.value !== ""
                      ? setHiddenLabel("form-label")
                      : setHiddenLabel("hidden-label")
                  }
                  className="input-field"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <div className="label-container">
                  <Form.Label className={hiddenLabel}>
                    Email address:
                  </Form.Label>
                </div>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onInput={(e) =>
                    e.target.value !== ""
                      ? setHiddenLabel("form-label")
                      : setHiddenLabel("hidden-label")
                  }
                  className="input-field"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <div className="label-container">
                  <Form.Label className={hiddenLabel}>Password:</Form.Label>
                </div>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  onInput={(e) =>
                    e.target.value !== ""
                      ? setHiddenLabel("form-label")
                      : setHiddenLabel("hidden-label")
                  }
                  className="input-field"
                />
              </Form.Group>
            </div>
            <button className="contact-btn py-2 px-3 d-block mt-5">
              Send message
            </button>
          </div>
        </Container>
      </div>
    </>
  );
}
