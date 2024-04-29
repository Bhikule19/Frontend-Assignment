import Board from "./components/Board";

function App() {
  return (
    <div className="app flex h-screen w-full flex-col">
      <div className="app_navbar w-full py-5 px-8 border-b-0">
        <h2>Trello</h2>
      </div>
      <div className="app_outer flex-1 w-full overflow-x-auto">
        <div className="app_boards min-w-fit flex gap-8 justify-around p-3 h-full">
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
}

export default App;
