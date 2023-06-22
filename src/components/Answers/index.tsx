import { ChangeEventHandler } from "react";

type AnswersProps<T> = {
  choices: T[];
  selected: string | T;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Answers = <T extends string[]>({
  choices,
  selected,
  onChange,
}: AnswersProps<T>) => {
  return (
    <div className="flex flex-col w-full">
      {choices.map((choice, index) => (
        <label
          key={index}
          className="flex text-white items-center border border-white p-3 w-full m-1 hover:bg-white hover:text-black"
        >
          <input
            type="radio"
            name=""
            value={choice}
            checked={choice === selected}
            onChange={onChange}
          />
          <div className="pl-2">{choice}</div>
        </label>
      ))}
    </div>
  );
};
export default Answers;
