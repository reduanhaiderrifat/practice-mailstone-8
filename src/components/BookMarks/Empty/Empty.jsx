import { Link } from "react-router-dom";
import Proptypes from "prop-types";
const Empty = ({ message, address, label }) => {
  return (
    <div className="min-h-[calc(100vh-95px)] gap-5 flex justify-center items-center flex-col p-16">
      <p>{message}</p>
      <Link to={address}>
        <a
          href="#_"
          className="relative inline-block px-4 py-2 font-medium group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>
          <span className="relative text-primary group-hover:text-white">
            {label}
          </span>
        </a>
      </Link>
    </div>
  );
};
Empty.propTypes = {
  message: Proptypes.any.isRequired,
  address: Proptypes.any.isRequired,
  label: Proptypes.any.isRequired,
};
export default Empty;
