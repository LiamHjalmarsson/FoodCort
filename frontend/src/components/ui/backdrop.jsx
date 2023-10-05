import ReactDOM from "react-dom";

const Backdrop = ({onClick}) => {
    const content = <div className="fixed top-0 left-0 w-full h-screen bg-zinc-700 bg-opacity-50 z-10" onClick={onClick}></div>

    return ReactDOM.createPortal(content, document.getElementById("backdrop"))
};

export default Backdrop;