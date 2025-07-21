import Container from "react-bootstrap/esm/Container";
import PageTitle from "../PageTitle/PageTitle";

export default function About() {
  return (
    <>
      <PageTitle title="About" />
      <div className="about-section d-flex flex-column justify-content-center">
        <Container>
          <div className="row">
            <div className="col">
              <div className="about-title">
                <h2 className="text-center text-uppercase fw-bold mb-2">
                  about component
                </h2>
                <div className="badge-container d-flex justify-content-center align-items-center pt-4">
                  <div className="line me-2"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line ms-2"></div>
                </div>
                <div className="abot-text-container d-flex justify-content-center align-items-center">
                  <p className="p-4">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                  <p className="p-4">
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
