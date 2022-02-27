import react from "react";
import random_attack_choice from "../bob's_choice/choice";

var user_picked_attack = " ";
export default function Click_scissors() {
  user_picked_attack = "Scissors";
  random_attack_choice(user_picked_attack);
}
