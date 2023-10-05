const Avatar = ({image, alt}) => {
    return (
        <div className="w-full h-full flex justify-center items-center"> 
            <img 
                src={image === null ? "https://sm.ign.com/ign_nordic/cover/a/avatar-gen/avatar-generations_prsz.jpg" : image} 
                className="rounded-full w-full h-full object-cover" 
                alt={alt}
            />
        </div>
    );
}

export default Avatar;