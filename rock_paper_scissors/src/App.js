import "./App.css";
import bootstrap from "bootstrap";
function App() {
  return (
    <div>
      <h1 className="title">Rock Paper Scissors</h1>
      <p1 className="prompt_user_to_choose">Select your attack: </p1>
      <button type="button" class="btn btn-primary btn-lg">
        Rock
      </button>
      <p-space> </p-space>
      <button type="button" class="btn btn-primary btn-lg">
        Paper
      </button>
      <p-space> </p-space>
      <button type="button" class="btn btn-primary btn-lg">
        Scissors
      </button>
      <div>
        <p-space> </p-space>
        <p2 className="Bobs_choice">Bob has chosen:</p2>
      </div>
    </div>
  );
}

export default App;
