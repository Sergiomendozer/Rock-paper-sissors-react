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
    ReactDOM.render(<p>Bob Wins</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack == "Rock" && bobs_attack_choice == "Scissors") {
    console.log("You win");
    ReactDOM.render(
      <p>Rock beats Scissors</p>,
      document.getElementById("reason_for_winner")
    );
    ReactDOM.render(<p>You Win</p>, document.getElementById("winner_result"));
  } else if (user_picked_attack === "Paper" && bobs_attack_choice === "Rock") {
    console.log("paper beats rock, paper");
  } else if (user_picked_attack == "Paper" && bobs_attack_choice == "Paper") {
    console.log("tie paper");
  } else if (
    user_picked_attack == "Paper" &&
    bobs_attack_choice == "Scissors"
  ) {
    console.log("Scissors beats rock, paper");
  } else if (
    user_picked_attack === "Scissors" &&
    bobs_attack_choice === "Rock"
  ) {
    console.log("Rock beats Scissors, Scissors");
  } else if (
    user_picked_attack == "Scissors" &&
    bobs_attack_choice == "Paper"
  ) {
    console.log("Scissors beats paper");
  } else if (
    user_picked_attack == "Scissors" &&
    bobs_attack_choice == "Scissors"
  ) {
    console.log("Tie Scissors");
  } else console.log("none");
}
