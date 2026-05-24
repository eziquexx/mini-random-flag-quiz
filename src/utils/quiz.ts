import type { QuizQuestion } from "../types";
import countryDataList from "../data.json";


export function generateFullQuizSet(): QuizQuestion[] {

    // 1. 전체 데이터 셔플 (문제 순서 랜덤)
    const shuffledData = [...countryDataList].sort(() => Math.random() - 0.5);

    // 2. 섞인 데이터를 순회하며 각각을 '정답'으로 삼는 문제 생성
    return shuffledData.map((correctAnswer) => {
        
        // 오답 후보
        const wrongOptions = shuffledData.filter((item) => item.id !== correctAnswer.id);
        
        // 오답 추첨
        const selectedWrongNames = wrongOptions
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((item) => item.name);

        // 보기 조합
        const options = [...selectedWrongNames, correctAnswer.name].sort(() => Math.random() - 0.5);

        // 문제 객체 반환
        return {
            correctAnswer,
            options
        }
    });
}