"use client";
import { Trivia, Trivias } from "@/services/trivias";
import { useEffect, useState } from "react";

const HomePage = () => {
	const [trivias, setTrivias] = useState<Trivia[]>([]);
	const [difficulty, setDifficulty] = useState<string>("easy");

	useEffect(() => {
		const getData = async () => {
			const data = await Trivias.get(difficulty);
			setTrivias(data);
		};
		getData();
	}, [difficulty]);

	const handleClick = async (choice: string) => {
		setDifficulty(choice);
	};

	console.log(trivias);

	return (
		<div className='p-5 border border-white flex flex-col justify-center content-center'>
			<h1 className='flex justify-center'>Select Difficulty</h1>
			<div>
				<button
					className='border border-white p-4 m-2'
					onClick={() => {
						handleClick("easy");
					}}
				>
					Easy
				</button>
				<button
					className='border border-white p-4 m-2'
					onClick={() => {
						handleClick("normal");
					}}
				>
					Normal
				</button>
				<button
					className='border border-white p-4 m-2'
					onClick={() => {
						handleClick("hard");
					}}
				>
					Hard
				</button>
			</div>
			<button
				className='border border-white p-4 m-2'
				type='submit'
			>
				Start Game
			</button>
		</div>
	);
};
export default HomePage;
