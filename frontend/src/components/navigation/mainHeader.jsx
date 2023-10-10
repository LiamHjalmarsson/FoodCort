const MainHeader = (props) => {
    return (
        <header className="w-full bg-jet text-timerwolf h-20 flex items-center bg-slate-600 text-white shadow-md px-4 z-5 md:justify-between">
            {props.children}
        </header>
    );
}

export default MainHeader;