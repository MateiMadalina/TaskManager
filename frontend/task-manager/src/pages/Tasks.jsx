import {useEffect, useState} from "react";
import {getTasks} from "../API-service/CRUDTask";
import {MdDone} from "react-icons/md";
import {MdOutlineDeleteOutline} from "react-icons/md";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then((tasks) => {
            setTasks(tasks);
        })
    }, []);

    console.log(tasks);

    function getPriorityColor(priority) {
        switch (priority) {
            case 'High':
                return 'bg-danger'; // culoare roșie pentru High
            case 'Medium':
                return 'bg-warning'; // culoare galbenă pentru Medium
            case 'Low':
                return 'bg-success'; // culoare verde pentru Low
            default:
                return 'bg-primary'; // culoare implicită, poți ajusta la nevoie
        }
    }

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

                            <table className="table text-white mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">Task</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Priority</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    tasks?.map((task) => (
                                        <tr className="fw-normal">
                                            <td className="align-middle">{task.title}</td>
                                            <td className="align-middle">{task.description}</td>
                                            <td className="align-middle">
                                                <h6 className="mb-0">
                                                     <span className={`badge ${getPriorityColor(task.priority)}`}>
                                                              {task.priority}
                                                     </span>
                                                </h6>
                                            </td>
                                            <td className="align-middle">{task.dueDate}</td>
                                            <td className="align-middle">{task.completed ? "DONE" : "IN PROGRES"}</td>
                                            <td className="align-middle">
                                                <a className="text-success me-4 fs-4"><MdDone/></a>
                                                <a className="fs-5" style={{color: "red"}}><MdOutlineDeleteOutline/></a>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tasks;