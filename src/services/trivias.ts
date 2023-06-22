import { GetStaticProps, GetServerSidePropsContext } from "next";

export interface Trivia<T> {
	category: string;
	correct_answer: T;
	difficulty: string;
	incorrect_answers: T[];
	question: string;
}

export class Trivias {

	public static async get<T>(
		amount: number,
		difficulty: string
	): Promise<Trivia<T>[]> {
		const res = await fetch(
			`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
		);

		const data = await res.json();
		return data.results as Trivia<T>[];
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