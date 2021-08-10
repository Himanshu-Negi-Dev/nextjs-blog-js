import Posts from "../components/PostComponents/Posts";
export default function Home({ posts }) {
  return (
    <>
      <Posts posts={posts} />
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:8000/posts");
  const posts = await res.json();
  console.log(posts);
  return {
    props: {
      posts,
    },
  };
};
