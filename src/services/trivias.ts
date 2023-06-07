export interface Trivia {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: [];
	question: string;
}

export class Trivias {
	public static async get(difficulty: string): Promise<Trivia[]> {
		console.log(difficulty);
		const res = await fetch(
			`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`
		);
		const data = await res.json();
		// console.log(data.results);

		return data.results.map((trivia: Trivia) => ({
			...trivia,
		}));
	}
}
