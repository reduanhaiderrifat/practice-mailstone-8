import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../../utils/iindex";
import Blog from "../Blog/Blog";
import Empty from "./Empty/Empty";

const BookMarks = () => {
  const [blogs, setBlogs] = useState([]);
  const handleDelete = (id) => {
    deleteBlog(id);
    const stredBlogs = getBlogs();
    setBlogs(stredBlogs);
  };
  useEffect(() => {
    const stredBlogs = getBlogs();
    setBlogs(stredBlogs);
  }, []);
  if (blogs.length < 1) {
    return (
      <Empty
        message="No Bookmarks available"
        address={"/blogs"}
        label={"go to blogs"}
      ></Empty>
    );
  }
  return (
    <div>
      <div className="grid justify-center p-6 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, idx) => (
          <Blog
            handleDelete={handleDelete}
            deletable={true}
            key={idx}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
