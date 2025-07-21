import homePic from "../../assets/imgi_1_avataaars.svg";
import PageTitle from "../PageTitle/PageTitle";
export default function Home() {
  return (
    <>
      <PageTitle title="Home" />

      <div className="home py-5 mt-5 d-flex flex-column justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col d-flex flex-column align-items-center gap-3">
              <img
                className="w-25"
                src={homePic}
                alt="svg of a person smiling with a dark background"
              />
              <div className="d-flex flex-column align-items-center gap-3">
                <h2 className="text-center">Start Framework</h2>
                <div className="icon-container d-flex justify-content-center align-items-center">
                  <div className="line me-2"></div>
                  <i className="fa-solid fa-star"></i>
                  <div className="line ms-2"></div>
                </div>
                <span>Graphic Artist - Web Designer - Illustrator</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
