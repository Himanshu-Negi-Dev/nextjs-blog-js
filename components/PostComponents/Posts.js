import Link from "next/link";
import styles from "./Posts.module.css";
import Post from "./Post";
const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <div className={styles.posts_container}>
        {posts.map((post) => {
          return (
            <Link href={"/" + post.id}>
              <a>
                <Post key={post.id} post={post} />
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Posts;
