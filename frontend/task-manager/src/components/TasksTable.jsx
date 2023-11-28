import {MdDone, MdOutlineDeleteOutline} from "react-icons/md";

const TasksTable = ({tasks}) => {
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
    );
}

export default TasksTable;