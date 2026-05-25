import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="p-4 w-full mt-[20px] sm:mt-[0px] flex flex-col justify-center items-center">
            <div className="w-full p-4 text-center grid gap-4">
                <h1 className="text-3xl font-bold text-center ">깃발 맞추기 게임</h1>
                <p>세계 여러 나라의 깃발을 보고 나라 이름을 맞추는 게임입니다.</p>
            </div>
            
            <Link 
                to="/game" 
                className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 mt-10 rounded-lg"
            >
                게임 시작
            </Link>
            
            <div className="w-full mt-20 text-sm text-center">
                이미지 자료: <a href="https://ko.wikipedia.org/wiki/%EA%B9%83%EB%B0%9C_%EB%AA%A9%EB%A1%9D" target="_blank">위키백과 깃발 목록</a>
            </div>
        </div>
    );
}