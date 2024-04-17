import { ConnectButton } from "@rainbow-me/rainbowkit";
import Github from "./Components/github";
import Twitter from "./Components/twitter";

function App() {
  return (
    <div className="bg-zinc-900 flex justify-center items-center h-screen text-white w-screen p-10">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl pb-10 font-bold text-center">
          Roundtable
        </h1>
        <div className="flex justify-center">
          <ConnectButton showBalance={false} />
        </div>
        <div className="flex flex-col pt-10">

        </div>
      </div>
    </div>
  );
}

export default App;
