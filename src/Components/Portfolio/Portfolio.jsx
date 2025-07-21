import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import PageTitle from "../PageTitle/PageTitle";

export default function Portfolio() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [currentImage, setCurrentImg] = useState(1);

  return (
    <>
      <PageTitle title="Portfolio" />
      <div
        onClick={() => setIsDisplayed(false)}
        className={
          isDisplayed === false
            ? "page-overlay d-flex justify-content-center align-items-center d-none"
            : "page-overlay d-flex justify-content-center align-items-center"
        }
      >
        <img
          src={
            currentImage === 1
              ? "https://routeegy.github.io/startFramework/assets/images/poert1.png"
              : currentImage === 2
              ? "https://routeegy.github.io/startFramework/assets/images/port2.png"
              : currentImage === 3
              ? "https://routeegy.github.io/startFramework/assets/images/port3.png"
              : null
          }
          alt="picture of a wooden house"
          className=""
        />
      </div>
      <div className="portfolio-container d-flex justify-content-center align-items-center mt-5 pt-5">
        <Container>
          <h2 className="text-center text-uppercase fw-bold mt-5 text-black">
            portfolio component
          </h2>
          <div className="badge-container d-flex justify-content-center align-items-center pt-4">
            <div className="line me-2 bg-black"></div>
            <i className="fa-solid fa-star text-black"></i>
            <div className="line ms-2 bg-black"></div>
          </div>
          <div className="row row-cols-1 row-cols-lg-3 g-4 mt-3 pb-5">
            <div className="col">
              <div
                className="img-container position-relative"
                onClick={() => {
                  setIsDisplayed(!isDisplayed), setCurrentImg(1);
                }}
              >
                <img
                  className="w-100"
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  alt="picture of a wooden house"
                />
                <div className="img-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="img-container position-relative"
                onClick={() => {
                  setIsDisplayed(!isDisplayed), setCurrentImg(2);
                }}
              >
                <img
                  className="w-100"
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                  alt="picture of a wooden house"
                />
                <div className="img-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="img-container position-relative"
                onClick={() => {
                  setIsDisplayed(!isDisplayed), setCurrentImg(3);
                }}
              >
                <img
                  className="w-100"
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                  alt="picture of a wooden house"
                />
                <div className="img-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="img-container position-relative"
                onClick={() => {
                  setIsDisplayed(!isDisplayed), setCurrentImg(1);
                }}
              >
                <img
                  className="w-100"
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  alt="picture of a wooden house"
                />
                <div className="img-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="img-container position-relative"
                onClick={() => {
                  setIsDisplayed(!isDisplayed), setCurrentImg(2);
                }}
              >
                <img
                  className="w-100"
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                  alt="picture of a wooden house"
                />
                <div className="img-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="img-container position-relative"
                onClick={() => {
                  setIsDisplayed(!isDisplayed), setCurrentImg(3);
                }}
              >
                <img
                  className="w-100"
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                  alt="picture of a wooden house"
                />
                <div className="img-overlay d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
