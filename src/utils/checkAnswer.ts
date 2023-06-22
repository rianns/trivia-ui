import { CorrectAnswers, SelectedAnswers } from "@/pages/Homepage/Game/page"

export const checkAnswer = (selected: SelectedAnswers[], correct: CorrectAnswers[]): number => {
    console.log(selected);
    console.log(correct);

    const score = correct.map((corr) => {
        const answer = selected.find(
            (sel) => sel.triviaId === corr.triviaId
        );
        return answer && answer.selected_answer === corr.correct_answer ? 1 : 0;
    });

    console.log(score);
    return score.reduce<number>((acc, s) => acc + s, 0);
}