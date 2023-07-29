import { ScrollCards } from "./component/ScrollCards";

function App() {
  return (
    <div>
      <div className="max-w-[1400px] px-[15px] mx-auto">
        <h2 className="text-center text-2xl mb-4 font-semibold">
          Scrolling Card UI With CSS Grid
        </h2>
        <ScrollCards />
      </div>
    </div>
  );
}

export default App;
