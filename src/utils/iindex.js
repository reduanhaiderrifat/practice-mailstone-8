import toast from "react-hot-toast";
export const getBlogs = () => {
  let blogs = [];
  const storageBlogs = localStorage.getItem("blogs");
  if (storageBlogs) {
    blogs = JSON.parse(storageBlogs);
  }
  return blogs;
};

// save?
export const saveBlog = (blog) => {
  let blogs = getBlogs();
  const isExist = blogs.find((b) => b.id === blog.id);
  if (isExist) {
    return toast.error("Already Bookmarked!");
  }
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
  toast.success("blog Bookmarked Successfully");
};

// /delete
export const deleteBlog = (id) => {
  let blogs = getBlogs();
  const remaning = blogs.filter((b) => b.id !== id);

  localStorage.setItem("blogs", JSON.stringify(remaning));
  toast.success("blog removed from Bookmark Successfully");
};
