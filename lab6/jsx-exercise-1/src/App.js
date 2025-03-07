import "./App.css";

function App() {
  const header = <h1>ENSF-381: Full Stack Web Development</h1>;
  const reactComponents = <p>React Components</p>;
  const currentYear = <p> {new Date().getFullYear()} </p>;
  const isLoggedIn = true;
  const isLoggedInString = (
    <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
  );

  return (
    <div>
      {header}
      {reactComponents}
      {currentYear}
      {isLoggedInString}
    </div>
  );
}

export default App;
