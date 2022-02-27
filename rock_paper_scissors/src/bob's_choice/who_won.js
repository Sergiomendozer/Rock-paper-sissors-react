import react from "react";
import ReactDOM from "react-dom";

export default function who_won(user_picked_attack, bobs_attack_choice) {
  console.log(`users choice: ${user_picked_attack}`);
  console.log(`Bob's choice: ${bobs_attack_choice}`);
  // next remove returns and do paper and scissors

  if (user_picked_attack === "Rock" && bobs_attack_choice === "Rock") {
    console.log("tie");
  } else if (user_picked_attack == "Rock" && bobs_attack_choice == "Paper") {
    console.log("Bob wins");
  } else if (user_picked_attack == "Rock" && bobs_attack_choice == "Scissors") {
    console.log("You win");
  } else console.log("none");
}
