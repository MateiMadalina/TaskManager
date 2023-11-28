import {useEffect, useState} from "react";
import {getTasks} from "../API-service/CRUDTask";
import {MdDone} from "react-icons/md";
import {MdOutlineDeleteOutline} from "react-icons/md";
import TasksTable from "../components/TasksTable";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(tasks);
        })
    }, []);

    console.log(tasks);



    return (
        <section className="mt-5">
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="row col-8 mt-5">
                    <div className="card" id="list1" style={{borderRadius: ".75rem", backgroundColor: "#eff1f3"}}>
                        <div className="card-body py-4 px-4 px-md-5">

                            <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                                <i className="fas fa-check-square me-1"></i>
                                <u>My Todo-s</u>
                            </p>

                            <div className="pb-2">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-flex flex-row align-items-center">
                                            <input type="text" className="form-control form-control-lg"
                                                   id="exampleFormControlInput1"
                                                   placeholder="Add new..."/>
                                            <a href="#!" data-mdb-toggle="tooltip" title="Set due date"><i
                                                className="fas fa-calendar-alt fa-lg me-3"></i></a>
                                            <div>
                                                <button type="button" className="btn btn-primary">Add</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4"/>
                            <TasksTable tasks={tasks}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tasks;