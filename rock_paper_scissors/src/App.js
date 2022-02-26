import "./App.css";
import bootstrap from "bootstrap";
function App() {
  return (
    <div>
      <h1 className="title">Rock Paper Scissors</h1>
      <p1 className="prompt_user_to_choose">Select your attack: </p1>
      <div class="container">
        <button type="button" className="Rock">
          Rock
        </button>
        <p-space> </p-space>
        <button type="button" className="Paper">
          Paper
        </button>
        <p-space> </p-space>
        <button type="button" className="Scissors">
          Scissors
        </button>
      </div>
      <div>
        <p-space> </p-space>
        <p2 className="Bobs_choice">Bob has chosen:</p2>
        <button type="Label" class="btn-circle btn-xl">
          test
        </button>
      </div>
      <div>
        <p3 className="results">Result:</p3>
      </div>
      <div>
        <p3 className="results">Winner is:</p3>
      </div>
      <div>
        <button type="button" className="new_game">
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
