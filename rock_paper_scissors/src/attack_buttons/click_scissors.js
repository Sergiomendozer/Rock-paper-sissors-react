import react from "react";
var user_picked_attack = " ";
export default function Click_scissors() {
  user_picked_attack = "Scissors";
  console.log(user_picked_attack);
  random_attack_choice();
  return user_picked_attack;
}
