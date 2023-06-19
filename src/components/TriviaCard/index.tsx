import { Trivia } from "@/services/trivias";
import Answers from "../Answers";
import { useState } from "react";

const TriviaCard = ({ trivia }: Trivia) => {
  const [selected, setSelected] = useState("");

  const { incorrect_answers, correct_answer, ...rest } = trivia;
  const choices = Object.values({ ...incorrect_answers, correct_answer });

  // console.log(choices);
  console.log(choices);
  console.log("rerender");

  console.log(selected);

  return (
    <div className="p-4 border border-black">
      <div>{trivia.question}</div>
      <Answers
        choices={choices}
        selected={selected}
        onChange={(e) => setSelected(e.target.value)}
      />
    </div>
  );
};
export default TriviaCard;
