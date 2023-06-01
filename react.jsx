import React, { useCallback } from "react";

export default function App() {
  const onClick = useCallback((e) => {
    console.log(e.target);
  }, []);

  return <div onClick={onClick()}></div>;
}
