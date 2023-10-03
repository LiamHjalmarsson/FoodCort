const Input_form = (props) => {
    return (
        <div className="flex flex-col gap-2 text-white">
            <label htmlFor={props.id}>
                { props.label}
            </label>
            <input type={props.type ? props.type : "text"} id={props.id} className="border border-slate-300 rounded" />
        </div>
    )
}

export default Input_form;