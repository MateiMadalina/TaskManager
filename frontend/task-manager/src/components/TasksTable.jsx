import {MdDone, MdOutlineDeleteOutline} from "react-icons/md";

const TasksTable = ({tasks, onDelete, taskDone}) => {
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return 'bg-danger';
            case 'Medium':
                return 'bg-warning';
            case 'Low':
                return 'bg-success';
            default:
                return 'bg-success';
        }
    }

    return (
        <table className="table text-white mb-0">
            <thead>
            <tr >
                <th scope="col" style={{backgroundColor: "antiquewhite"}}>Task</th>
                <th scope="col" style={{backgroundColor: "antiquewhite"}}>Description</th>
                <th scope="col" style={{backgroundColor: "antiquewhite"}}>Priority</th>
                <th scope="col" style={{backgroundColor: "antiquewhite"}}>Due Date</th>
                <th scope="col" style={{backgroundColor: "antiquewhite"}}>Status</th>
                <th scope="col" style={{backgroundColor: "antiquewhite"}}>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                tasks?.map((task) => (
                    <tr className="fw-normal" >
                        <td className="align-middle" style={{backgroundColor: "antiquewhite"}}>{task.title}</td>
                        <td className="align-middle" style={{backgroundColor: "antiquewhite"}}>{task.description}</td>
                        <td className="align-middle" style={{backgroundColor: "antiquewhite"}}>
                            <h6 className={`badge ${getPriorityColor(task.priority)}`}>{task.priority}</h6>
                        </td>
                        <td className="align-middle" style={{backgroundColor: "antiquewhite"}}>{task.dueDate}</td>
                        <td className="align-middle" style={{backgroundColor: "antiquewhite"}}>{task.completed ? "DONE" : "IN PROGRES"}</td>
                        <td className="align-middle" style={{backgroundColor: "antiquewhite"}}>
                            <a className="text-success me-4 fs-4" data-mdb-toggle="tooltip" title="Done" onClick={() => taskDone(task.id)} ><MdDone/></a>
                            <a className="fs-5" data-mdb-toggle="tooltip" title="Remove" onClick={() => onDelete(task.id)} style={{color: "red"}} ><MdOutlineDeleteOutline/></a>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}

export default TasksTable;