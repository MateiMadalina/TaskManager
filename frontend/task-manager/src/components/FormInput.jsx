const FormInput = ({content, type, name}) => {
    return(
        <div className="form-floating mb-4" >
            <label className="pt-1 fw-bold" style={{fontSize: "0.75em",color:"saddlebrown"}}
                   htmlFor="floatingInputValue">{content}</label>
            <input type={type} name={name} className="form-control form-control-lg "
                   required={true} style={{fontSize: "1.1em",borderColor:"burlywood"}}/>
        </div>
    );
}

export default FormInput;