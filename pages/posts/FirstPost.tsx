import { useEffect } from 'react';

const FirstPost = () => {

  useEffect(() => {
    console.log("called");

    return () => {
      console.log("destroyed");
    };
  });

  return (
    <>
      <h1> First Post </h1>
    </>
  );
};

export default FirstPost;