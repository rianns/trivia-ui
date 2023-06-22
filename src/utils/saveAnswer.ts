import { SelectedAnswers } from "@/pages/Homepage/Game/page";

export const addOrUpdateAnswer = (triviaId: number, selected: string, saveAnswers: SelectedAnswers[]) => {
    const saved = saveAnswers.findIndex(answer => answer.triviaId === triviaId);
    if (saved !== -1) {
        saveAnswers[saved].selected_answer = selected;
    } else {
        saveAnswers.push({ triviaId, selected_answer: selected});
    }
};