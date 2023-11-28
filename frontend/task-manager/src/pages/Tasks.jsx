import {useEffect, useState} from "react";
import {getTasks} from "../API-service/CRUDTask";
import TasksTable from "../components/TasksTable";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(tasks);
        })
    }, []);


    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card row col-8 mt-5 rounded-4 " id="list1" style={{backgroundColor: "antiquewhite"}}>
                <div className="card-body py-4 px-4 px-md-5" >
                    <p className="h1 text-center mt-3 mb-4 pb-3 " >
                        To-Do List: Your Roadmap to Success
                    </p>

                    <div className="card-body d-flex flex-row align-items-center" >
                            <input type="text" className="form-control form-control-lg"
                                   id="exampleFormControlInput1"
                                   placeholder="Add new..."/>
                            <a data-mdb-toggle="tooltip" title="Set due date"><i
                                className="fas fa-calendar-alt fa-lg me-3"></i></a>
                            <div>
                                <button type="button" className="btn ">Add</button>
                            </div>
                    </div>

                    <hr className="my-4"/>
                    <TasksTable tasks={tasks} />
                </div>
            </div>
        </div>

    );
}

export default Tasks;