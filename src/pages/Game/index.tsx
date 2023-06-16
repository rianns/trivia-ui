import TriviaList from "@/components/TriviaList";
import { Trivia, Trivias } from "@/services/trivias";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Game = () => {
	const [trivias, setTrivias] = useState<Trivia[]>([]);
	
	useEffect(() => {
		const getData = async () => {
		  const data = await Trivias.get(difficulty);
		  setTrivias(data);
		};
		getData();
	  }, [difficulty]);


	return (
		<div>
			<TriviaList />
		</div>
	);
};
export default Game;
