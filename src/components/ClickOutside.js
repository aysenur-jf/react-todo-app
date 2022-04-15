import React, { useEffect, useRef, useState } from "react";

const SampleComponent = () => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(true);
    }
  };

  const handleClickInside = () => setClickedOutside(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <button ref={myRef} onClick={handleClickInside}>
      {clickedOutside ? "Bye!" : "Hello!"}
    </button>
  );
};

export default SampleComponent;
