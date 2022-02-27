import react from "react";
import ReactDOM from "react-dom";

var bobs_attack_choice = " ";

export default function random_attack_choice() {
  var list_of_choices = ["Rock", "Paper", "Scissors"];
  bobs_attack_choice =
    list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
  console.log(bobs_attack_choice);
  ReactDOM.render(
    <p>{bobs_attack_choice}</p>,
    document.getElementById("bobs_attack_choice")
  );
  return bobs_attack_choice;
}
