import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
    const content =
        <CSSTransition in={props.show} timeout={400} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <div className="fixed left-0 top-20 z-50 h-screen w-full text-timerwolf bg-jet" onClick={props.onClick}>
                {props.children}
            </div>
        </CSSTransition>
    ;

    return ReactDOM.createPortal(content, document.getElementById("portal"));
}

export default SideDrawer;    