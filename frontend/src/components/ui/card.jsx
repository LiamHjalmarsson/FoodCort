const Card = (props) => {
    return (
        <div 
            className={`relative m-0 shadow-md rounded-lg p-2 overflow-hidden bg-white ${props.className}`} 
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export default Card;