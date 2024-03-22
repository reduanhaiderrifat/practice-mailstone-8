import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative hero min-h-[calc(100vh-95px)] flex flex-col justify-center items-center ">
      <div className="-mt-28">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold ">
              Wellcome to{" "}
              <span className="bg-gradient-to-r from-secondary primary to-green-400 text-transparent bg-300% bg-clip-text animate-gradient">
                Byte Blaze
              </span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex gap-2 items-center justify-center">
              <Link to="/blogs">
                <a
                  href="#_"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
                  <span className="relative text-primary group-hover:text-white">
                    Blogs
                  </span>
                </a>
              </Link>
              <Link to="/bookmarks">
                <a
                  href="#_"
                  className="relative inline-block px-4 py-2 font-medium group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-secondary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-secondary"></span>
                  <span className="relative text-secondary group-hover:text-white">
                    BookMarks
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 w-full px-0" src="wave.svg" alt="" />
    </div>
  );
};

export default Home;
