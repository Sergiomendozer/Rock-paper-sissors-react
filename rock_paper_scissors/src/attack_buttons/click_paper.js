import react from "react";
import random_attack_choice from "../bob's_choice/choice";

var user_picked_attack = " ";
export default function Click_paper() {
  user_picked_attack = "Paper";
  console.log(user_picked_attack);
  random_attack_choice(user_picked_attack);
}

// export default function Click_paper() {
//   user_picked_attack = "Paper";
//   console.log(user_picked_attack);
//   random_attack_choice(user_picked_attack);

// }
