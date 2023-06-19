import { ChangeEventHandler } from "react";

type AnswersProps = {
  choices: string[];
  selected: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Answers = ({ choices, selected, onChange }: AnswersProps) => {
  return (
    <div>
      {choices.map((choice) => (
        <label key={choice}>
          <input
            type="radio"
            name=""
            value={choice}
            checked={choice === selected}
            onChange={onChange}
          />
          {choice}
        </label>
      ))}
    </div>
  );
};
export default Answers;
