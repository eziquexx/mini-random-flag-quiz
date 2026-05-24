// 원본 데이터 구조
export interface CountryData {
    id: string;         // kr, us, jp
    name: string;       // 대한민국, 미국, 일본
    imageSrc: string;   // /assets/flags/kr.png
}

// 실제 게임 화면에서 사용할 퀴즈 한 문제의 구조
export interface QuizQuestion {
    correctAnswer: CountryData;   // 정답 국가 데이터
    options: string[];            // 무작위 4개의 국가 이름 배열 (정답 1개 + 오답 3개)
}