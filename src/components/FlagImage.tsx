interface FlagImageProps {
    src: string;
    alt: string;
}

export const FlagImage = ({ src, alt }: FlagImageProps) => {

    return (
        <img 
            src={src} alt={alt} 
            className="w-[300px] h-auto border border-gray-300 object-cover"
        />
    );
}