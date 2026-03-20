import ImcCalc from "./components/ImcCalc";

const App = () => {
  return (
    <div
      id="body"
      className="font-lato bg-dark-blue flex justify-center items-center min-h-screen text-white"
    >
      <div id="container" className="min-w-100 min-h-100 bg-blue p-8 rounded">
        <ImcCalc />
      </div>
    </div>
  );
};

export default App;
