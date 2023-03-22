import { useEffect, useState } from "react";
import Profile from "./Components/Profile/Profile";
import Pagination from "./Components/Pagination/Pagination";
import "./styles.css";

export default function App() {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const profileList = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      console.log(response.ok);
      const data = await response.json();
      console.log(data);
      setProfile(data);
    } catch (Error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    profileList();
  }, []);

  // Get current Posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  console.log(indexOfLastPost, indexOfFirstPost);
  const currentPost = profile.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="App">
      <h1 className="text-primary">Hello CodeSandbox</h1>
      <h2>Posts</h2>
      {isError && <p>Something went wrong.</p>}
      {isLoading && !isError && <p>Loading...</p>}
      {!isLoading && !isError && <Profile listUsers={currentPost} />}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={profile.length}
        paginate={paginate}
      />
    </div>
  );
}
