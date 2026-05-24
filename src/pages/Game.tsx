import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { QuizQuestion } from "../types";
import { generateFullQuizSet } from "../utils/quiz";
import { FlagImage } from "../components/FlagImage";
import { QuizButton } from "../components/QuizButton";

export function Game() {

    // 1. 필요한 상태 정의
    const [quizSet, setQuizSet] = useState<QuizQuestion[]>([]); // 전체 문제 세트
    const [currentIndex, setCurrentIndex] = useState(0); // 현재 문제 번호
    const [score, setScore] = useState<number>(0); // 점수
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null); // 사용자가 선택한 답
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null); // 정답 여부
    const [gameFinished, setGameFinished] = useState(false); // 게임 종료 여부
    const [choiceNum, setChoiceNum] = useState<boolean>(false); // 답 선택 요청
    const navigate = useNavigate();
    
    // 2. 게임 데이터 초기화
    useEffect(() => {
        const fullSet = generateFullQuizSet();
        setQuizSet(fullSet);

        fullSet.forEach((question) => {
            const img = new Image();
            img.src = question.correctAnswer.imageSrc; // 브라우저가 이미지를 미리 캐싱함
        })
    }, []);

    // 데이터 로딩
    if (quizSet.length === 0) return <div>로딩 중...</div>;

    // 3. 현재 인덱스에서 문제 1개 추출
    const currentQuestion = quizSet[currentIndex];

    // 정답 확인 함수
    const handleAnswerClick = (answerName: string) => {

        if (selectedAnswer) return; // 이미 답을 선택한 경우 무시
        setChoiceNum(false); // 답 선택 요청 초기화

        // 사용자가 고른 답 상태 기록
        setSelectedAnswer(answerName);

        // 정답 검증 + 접수 업데이트
        if (answerName === currentQuestion.correctAnswer.name) {
            setScore((prev) => prev + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };

    // 4. 다음 문제로 넘어가기 (또는 게임 종료)
    const handleNextClick = () => {

        if (!selectedAnswer) return handleChoiceAlert(); // 답을 선택하지 않은 경우 무시

        setSelectedAnswer(null);
        setIsCorrect(null);

        if (currentIndex < quizSet.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            setGameFinished(true);
        }
    }

    // 결과
    const navigateToResult = () => {
        navigate('/result', { state: { score, total: quizSet.length } });
    }

    const handleChoiceAlert = () => {
        return setChoiceNum(true);
    }

    return (
        <div className="p-4 w-full flex flex-col justify-center items-center">
            <Link to="/" className="self-start inline-block text-left text-blue-500 hover:text-blue-700">
                ← 홈으로
            </Link>
            <div className="w-full p-4 text-center grid gap-4">
                <h1 className="text-3xl font-bold text-center ">게임 화면</h1>
            </div>
            
            {/* 정답 표시 */}
            <div className="w-full rounded-xl bg-gray-100 px-20 py-6 my-4 text-center">
                <h3 className="text-lg font-semibold">정답 표시</h3>
                <div className="mt-2 h-10 text-md leading-10">
                    {isCorrect === null ? "" : isCorrect ? (
                        <p className="text-green-500">정답입니다!</p>
                    ) : (
                        <p className="text-red-500">틀렸습니다!</p>
                    )}
                    {choiceNum && <p className="text-red-500">답을 선택해주세요!</p>}
                </div>
            </div>

            {/* 문제 표시 */}
            <div 
                className="
                    px-20 py-12 my-4 flex flex-col items-center gap-8
                    bg-white rounded-xl w-full sm:border border-gray-300
                    border-0">
                <div className="w-full grid gap-4 text-sm text-gray-600 text-center">
                    <h3>맞춘 개수 {score} / {quizSet.length}</h3>
                    <h3>문제 {currentIndex +1} / {quizSet.length}</h3>
                </div>
                <FlagImage
                    src={currentQuestion.correctAnswer.imageSrc}
                    alt={currentQuestion.correctAnswer.name}
                />
                <div 
                    className="
                        w-[300px] sm:w-xl grid grid-cols-1 sm:grid-cols-2 gap-4
                ">
                    {currentQuestion.options.map((optionName, index) => (
                        <QuizButton 
                            key={index}
                            text={optionName}
                            label={optionName}
                            onClick={() => handleAnswerClick(optionName)}
                            disabled={!!selectedAnswer}

                            isSelected={selectedAnswer === optionName}
                            isCorrectAnswer={currentQuestion.correctAnswer.name === optionName}
                            hasAnswered={!!selectedAnswer}
                        />
                    ))}
                </div>
            </div>

            {/* 다음 버튼 */}
            {currentIndex < quizSet.length - 1 ? (
                <button 
                    onClick={handleNextClick}
                    className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 mt-4 rounded-lg"
                >
                    다음 문제
                </button>
            ) : (
                <button 
                    onClick={navigateToResult}
                    className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 mt-4 rounded-lg"
                >
                    결과보러 가기
                </button>
            )}
        </div>
    );
}