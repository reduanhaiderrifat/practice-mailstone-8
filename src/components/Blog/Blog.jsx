import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import placeholderimage from "../../assets/image/404.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Blog = ({ blog, deletable, handleDelete }) => {
  return (
    <div className=" hover:scale-105  hover:border-secondary relative  border-opacity-30">
      <Link
        to={`/blog/${blog.id}`}
        className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
      >
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={blog.cover_image || placeholderimage}
        />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
            {blog.title}
          </h3>
          <span className="text-xs dark:text-gray-400">
            {new Date(blog.published_at).toLocaleString()}
          </span>
          <p>{blog.description}</p>
        </div>
      </Link>
      {deletable && (
        <div
          onClick={() => handleDelete(blog.id)}
          className=" absolute -top-3 -right-3 cursor-pointer bg-blue-400 hover:bg-pink-400 p-2 rounded-full"
        >
          <RiDeleteBin5Fill size={20} />
        </div>
      )}
    </div>
  );
};
Blog.propTypes = {
  blog: Proptypes.object.isRequired,
  deletable: Proptypes.bool.isRequired,
  handleDelete: Proptypes.func.isRequired,
};

export default Blog;
