const FormAddNewTask = ({onSave}) => {
    return(
        <form onSubmit={(e) => onSave(e)} className="my-4">
            <div className="card p-3 shadow-sm" style={{backgroundColor:"floralwhite"}}>
                <div className="row">
                    <div className="col-md-3 col-12">
                        <div className="form-floating">
                            <label className="pt-1 fw-bold" style={{fontSize: "0.75em"}} htmlFor="floatingInputValue">Task</label>
                            <input type="text" className="form-control rounded-start-3" style={{height: "58px"}} required={true} defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="form-floating">
                            <label className="pt-1 fw-bold" style={{fontSize: "0.75em"}} htmlFor="floatingInputValue">Description</label>
                            <input type="text" className="form-control" style={{height: "58px"}} required={true} defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-12">
                        <div className="form-floating">
                            <label className="pt-1 fw-bold" style={{fontSize: "0.75em"}} htmlFor="floatingInputValue">Due Date</label>
                            <input id="startDate" className="form-control" style={{height: "58px"}} required={true} type="date" defaultValue=""/>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 d-flex align-items-end">
                        <div className="form-floating w-100">
                            <label className="pt-1 fw-bold" style={{fontSize: "0.75em"}} htmlFor="floatingInputValue">Priority</label>
                            <select required={true} className="form-select" style={{height: "58px"}} defaultValue="">
                                <option value="" hidden={true}></option>
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                        <button className="btn ms-2 mb-2" type="submit">ADD</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default FormAddNewTask;