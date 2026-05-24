interface FlagImageProps {
    src: string;
    alt: string;
}

export const FlagImage = ({ src, alt }: FlagImageProps) => {
    const imgageSrc = `${import.meta.env.BASE_URL}${src.replace(/^\//, '')}`;

    return (
        <img 
            src={imgageSrc} alt={alt} 
            className="w-[300px] h-auto border border-gray-300 object-cover"
        />
    );
}