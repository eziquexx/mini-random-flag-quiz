import { Link, useLocation } from "react-router-dom";

export const Result = () => {

    const location = useLocation();
    const { score, total } = location.state || { score: 0, total: 0 };

    return (
        <div className="p-4 w-full flex flex-col justify-center items-center">
            <div className="w-full p-4 text-center grid gap-4">
                <h1 className="text-3xl font-bold text-center ">결과 화면</h1>
            </div>
            
            {/* 결과 표시 */}
            <div className="w-full rounded-xl bg-gray-100 px-20 py-6 my-4 text-center">
                <h3 className="text-lg font-semibold">맞춘 문제 개수 / 전체 문제</h3>
                <div className="mt-2 h-10 text-md leading-10">{score} / {total}</div>
            </div>
            <Link to="/" 
                className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 mt-4 rounded-lg"
            >
                홈으로
            </Link>
        </div>
    );
}