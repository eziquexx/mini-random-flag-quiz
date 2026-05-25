import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div 
            className="
            mx-auto pt-[20px] sm:pt-[50px] w-full md:w-[740px]  h-screen flex flex-col justify-start items-center
        ">
            <Outlet />
        </div>
    );
}