import { GetStaticProps, GetServerSidePropsContext } from "next";

export interface Trivia {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: [];
	question: string;
}

export class Trivias {
	// public static async get(choice: string): Promise<Trivia[]> {
	// 	// console.log(difficulty);
	// 	const res = await fetch(
	// 		`https://opentdb.com/api.php?amount=10&difficulty=${choice}`
	// 	);
	// 	const data = await res.json();
	// 	// console.log(data.results);

	// 	return data.results.map((trivia: Trivia) => ({
	// 		...trivia,
	// 	}));
	// }

	public static async get(
		amount: number,
		difficulty: string
	): Promise<Trivia[]> {
		const res = await fetch(
			`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
		);

		const data = await res.json();
		return data.results as Trivia[];
	}
	
	
}

// export async function getGameSettings(ctx: GetServerSidePropsContext) {
// 	const { amount, difficulty } = ctx.query;

// 	const trivias = await Trivias.get(Number(amount), String(difficulty));

// 	return {
// 		props: {
// 			trivias,
// 		},
// 	};
// }