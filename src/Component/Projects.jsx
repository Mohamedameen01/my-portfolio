import Ecommerce from "../assets/ecommerce.jpg";
import SocialMedia from "../assets/social-media.png";

function Projects() {
  return (
    <section id="projects" className="text-white mx-auto max-w-[1280px] p-3">
      <h1 className="text-center font-semibold md:text-start capitalize text-xl md:text-2xl m-4 ">
        My Works
      </h1>
      <div className="grid md:grid-cols-3 xl:grid-cols-3">
        <div className="md:w-[240px] lg:w-[300px] xl:w-[400px] p-4 box-border ">
          <a
            href="https://mern-memories24.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-[400px] h-[200px] rounded-xl cursor-pointer shadow-lg shadow-gray-400 hover:scale-105"
              src={SocialMedia}
              alt="social-media-app"
            />
            <h1 className="text-center capitalize lg:text-xl m-2 mt-4">
              SocialMedia App
            </h1>
          </a>
        </div>
        <div className="md:w-[240px] lg:w-[300px] xl:w-[400px] p-4 box-border ">
          <a
            href="https://mern-ecommerce-cart-app.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="w-[400px] h-[200px] rounded-xl cursor-pointer shadow-lg shadow-gray-400 hover:scale-105"
              src={Ecommerce}
              alt="ecommerce-app"
            />
            <h1 className="text-center capitalize lg:text-xl m-2 mt-4">
              Ecommerce App
            </h1>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
