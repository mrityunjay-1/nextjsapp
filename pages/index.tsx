import { useEffect } from 'react';
import Link from 'next/link';

const Home = () => {

  useEffect(() => {
    console.log("index.tsx mounted");

    fetch(`http://localhost:3000/api/hello`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

    return () => {
      console.log("index.ts is now destroyed");
    };
  }, []);

  return (
    <>
      <h1> HI </h1>
      <Link href="/posts/FirstPost" >
        <a> this page </a>
      </Link>
    </>
  );
};

export default Home;