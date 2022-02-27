import react from "react";
import ReactDOM from "react-dom";
import who_won from "./who_won";

var bobs_attack_choice = " ";

export default function random_attack_choice(user_picked_attack) {
  var list_of_choices = ["Rock", "Paper", "Scissors"];
  bobs_attack_choice =
    list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
  ReactDOM.render(
    <p>{bobs_attack_choice}</p>,
    document.getElementById("bobs_attack_choice")
  );
  who_won(user_picked_attack, bobs_attack_choice);
}
