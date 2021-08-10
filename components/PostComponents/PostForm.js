import { useState, useContext } from "react";
import styles from "./Posts.module.css";
import TodoContext from "../../context/Posts/post-context";
const PostForm = () => {
  const [formData, setFormData] = useState({
    ptitle: "",
    ptext: "",
  });

  const { addPost } = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    addPost(formData);
    setFormData({
      ptitle: "",
      ptext: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter title" name="ptitle" value={formData.ptitle} onChange={handleChange} />
          <input type="text" placeholder="Enter text" name="ptext" value={formData.ptext} onChange={handleChange} />
          <button type="submit">Add Post</button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
