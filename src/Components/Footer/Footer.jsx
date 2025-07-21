import Container from "react-bootstrap/esm/Container";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <Container className="footer-container">
          <div className="row row-cols-1 row-cols-md-3 g-5">
            <div className="col text-center">
              <div className="location d-flex flex-column gap-3">
                <h3>Location</h3>
                <span>2215 John Daniel Drive</span>
                <span>Clark, MO 65243</span>
              </div>
            </div>
            <div className="col text-center">
              <div className="location d-flex flex-column gap-3">
                <h3>AROUND THE WEB</h3>
                <div className="icons-container d-flex flex-row justify-content-center gap-4">
                  <div className="icon-span">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className="icon-span">
                    <i className="fa-brands fa-x-twitter"></i>
                  </div>
                  <div className="icon-span">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                  <div className="icon-span">
                    <i className="fa-solid fa-globe"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col text-center">
              <div className="location d-flex flex-column gap-3">
                <h3>About Freelancer</h3>
                <span>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </span>
              </div>
            </div>
          </div>
        </Container>
        <div className="copyright-container p-4">
          <span className="text-center d-block">
            Copyright © Your Website 2021
          </span>
        </div>
      </footer>
    </>
  );
}
