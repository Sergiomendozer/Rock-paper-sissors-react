import react from "react";
import ReactDOM from "react-dom";

export default function who_won(user_picked_attack, bobs_attack_choice) {
  console.log(`users choice: ${user_picked_attack}`);
  console.log(`Bob's choice: ${bobs_attack_choice}`);
  // next remove returns and do paper and scissors

  if (user_picked_attack === "Rock" && bobs_attack_choice === "Rock") {
    ReactDOM.render(
      <p>Both of you picked Rock</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>Tie</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack == "Rock" && bobs_attack_choice == "Paper") {
    ReactDOM.render(
      <p>Paper beats Rock</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Lose</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack == "Rock" && bobs_attack_choice == "Scissors") {
    ReactDOM.render(
      <p>Rock beats Scissors</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Win</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack === "Paper" && bobs_attack_choice === "Rock") {
    ReactDOM.render(
      <p>Paper beats Rock</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Win</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack == "Rock" && bobs_attack_choice == "Scissors") {
    ReactDOM.render(
      <p>Rock beats Scissors</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Win</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack == "Paper" && bobs_attack_choice == "Paper") {
    ReactDOM.render(
      <p>Both of you picked paper</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>Tie</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack == "Rock" && bobs_attack_choice == "Scissors") {
    ReactDOM.render(
      <p>Rock beats Scissors</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Win</p>, document.getElementById("winner_result"));
  } else if (
    user_picked_attack == "Paper" &&
    bobs_attack_choice == "Scissors"
  ) {
    ReactDOM.render(
      <p>Scissors beats Paper</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Lose</p>, document.getElementById("winner_result"));
  } else if (
    user_picked_attack === "Scissors" &&
    bobs_attack_choice === "Rock"
  ) {
    ReactDOM.render(
      <p>Rock beats Scissors</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Lose</p>, document.getElementById("winner_result"));
  } else if (
    user_picked_attack == "Scissors" &&
    bobs_attack_choice == "Paper"
  ) {
    ReactDOM.render(
      <p>Scissors beats Paper</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Wins</p>, document.getElementById("winner_result"));
  } else if (
    user_picked_attack == "Scissors" &&
    bobs_attack_choice == "Scissors"
  ) {
    ReactDOM.render(
      <p>both of picked Scissors</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>Tie</p>, document.getElementById("winner_result"));
  }
}
