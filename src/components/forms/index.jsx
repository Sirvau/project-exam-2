export function Form({id, method, action, children, buttonText}) {
    return(
        <form id={id} method={method} action={action} className="mt-12">
            {children}
            <button type="submit" className="btn btn-sm bg-tBase mt-12 w-1/2 border-0 rounded-full">{buttonText}</button>
        </form>
    );
}

export default Form 