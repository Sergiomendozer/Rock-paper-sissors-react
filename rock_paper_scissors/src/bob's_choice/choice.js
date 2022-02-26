import react from "react";

var Bobs_choice = " ";

export default function random_attack_choice() {
  var list_of_choices = ["Rock", "Paper", "Scissors"];
  Bobs_choice =
    list_of_choices[Math.floor(Math.random() * list_of_choices.length)];
  console.log(Bobs_choice);
  return Bobs_choice;
}
