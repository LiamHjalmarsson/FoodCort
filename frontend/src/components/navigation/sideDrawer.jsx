import ReactDOM from "react-dom";

const SideDrawer = (props) => {
    const content =
        <aside className="fixed left-0 top-0 z-50 h-screen w-9/12 bg-purple-400 border-x-slate-500">
            {props.children}
        </aside>
    ;

    return ReactDOM.createPortal(content, document.getElementById("portal"));
}

export default SideDrawer;