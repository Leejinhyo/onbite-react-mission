import Welcome from "./Welcome";

function App() {
  const user = {
    name: "이정환",
    isMember: true,
  };

  return (
    <>
      <Welcome {...user} />
    </>
  );
}

export default App;
