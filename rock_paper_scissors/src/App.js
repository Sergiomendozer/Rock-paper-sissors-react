import "./App.css";
import bootstrap from "bootstrap";
import Click_rock from "./attack_buttons/click_rock";
import Click_paper from "./attack_buttons/click_paper";
import Click_scissors from "./attack_buttons/click_scissors";
import bobs_attack_choice from "./bob's_choice/choice";
function App() {
  return (
    <div>
      <h1 className="title">Rock Paper Scissors</h1>
      <p className="prompt_user_to_choose">Select your attack: </p>
      <div className="container">
        <button type="button" className="Rock" onClick={Click_rock}>
          Rock
        </button>
        <p-space> </p-space>
        <button type="button" className="Paper" onClick={Click_paper}>
          Paper
        </button>
        <p-space> </p-space>
        <button type="button" className="Scissors" onClick={Click_scissors}>
          Scissors
        </button>
      </div>
      <div>
        <p-space> </p-space>
        <p className="Bobs_choice">Bob has chosen:</p>
        <button
          id="bobs_attack_choice"
          type="Label"
          class="btn-circle btn-xl"
        ></button>
      </div>
      <div>
        <p className="results">
          Result:
          <p id="reason_for_winner" className="results"></p>
        </p>
      </div>
      <div>
        <p className="results">
          Winner is:
          <p id="winner_result" className="results"></p>
        </p>
      </div>
    </div>
  );
}

export default App;
