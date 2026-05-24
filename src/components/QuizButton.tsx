interface QuizButtonProps {
    text: string;
    label: string;
    onClick: () => void;
    disabled: boolean;
    isSelected: boolean; 
    isCorrectAnswer: boolean;
    hasAnswered: boolean;
}

export const QuizButton = ({
    text, 
    label, 
    onClick, 
    disabled,
    isSelected, // 선택한 답
    isCorrectAnswer, // 정답
    hasAnswered //답 선택 여부
}: QuizButtonProps) => {

    let buttonClass = "w-full p-4 border rounded-xl text-base font-semibold transition-all duration-200 text-center ";

    if (hasAnswered) {

        if (isCorrectAnswer) {
            if (isSelected) {
                buttonClass += "bg-green-50 border-green-500 text-green-700 cursor-not-allowed";
            } else {
                buttonClass += "bg-red-50 border-red-500 text-red-700 cursor-not-allowed";
            }
        } else {
            buttonClass += "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed";
        }
    } else {
        buttonClass += "bg-white border-gray-200 text-gray-800 hover:border-blue-500 cursor-pointer";
    }

    return (
        <button
            onClick={onClick}
            aria-label={label}
            disabled={disabled}
            className={buttonClass}
        >
            {text}
        </button>
    );
}