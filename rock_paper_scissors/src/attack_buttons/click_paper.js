import react from "react";
var user_picked_attack = " ";
export default function Click_paper() {
  user_picked_attack = "Paper";
  console.log(user_picked_attack);
  random_attack_choice();
  return user_picked_attack;
}