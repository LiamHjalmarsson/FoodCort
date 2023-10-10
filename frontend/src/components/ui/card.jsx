const Card = (props) => {
    return (
        <div 
            className={`m-0 shadow-md rounded-lg p-1 overflow-hidden bg-battleship text-smoke ${props.className}`} 
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export default Card;