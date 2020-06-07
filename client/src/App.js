import React, { useEffect, useState } from "react";

function App() {
  const [serverState, setServerState] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((state) => {
        setServerState(state.posts);
      });
  });

  return (
    <div className="App">
      <h1> Status Serwera : {serverState} </h1>
    </div>
  );
}

export default App;
