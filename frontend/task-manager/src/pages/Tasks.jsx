import {useEffect, useState} from "react";
import {addTask, deleteTask, getTasks, markTaskAsDone} from "../API-service/CRUDTask";
import TasksTable from "../components/TasksTable";
import FormAddNewTask from "../components/FormAddNewTask";
import {useAuthHeader, useIsAuthenticated} from "react-auth-kit";
import {useNavigate} from "react-router-dom";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);
    const isAuth = useIsAuthenticated();
    const token = useAuthHeader();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth()) {
            navigate("/login");
        } else {
            getTasks(token()).then((tasks) => {
                setTasks(tasks);
            })
        }
    }, []);

    const onSave = async (e) => {
        e.preventDefault();
        const newTask = {
            title: e.target[0].value,
            description: e.target[1].value,
            dueDate: e.target[2].value,
            completed: false,
            priority: e.target[3].value
        }
        try {
            await addTask(newTask, token());
            window.location.reload();
            // setTasks((prevTasks) => [...prevTasks, newTask]);
            //e.target.reset();

        } catch (error) {
            console.error("Error adding task:", error);
        }
    }

    const onDelete = async (taskId) => {
        try {
            await deleteTask(taskId, token());
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    const taskDone = async (taskId) => {
        try {
            await markTaskAsDone(taskId, token());
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task.id === taskId ? {...task, completed: true} : task
                )
            );
        } catch (error) {
            console.error("Error marking task as done:", error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card row col-8 mt-4 rounded-4" id="task">
                <div className="card-body py-4 px-4 px-md-5">
                    <h1 className="text-center mt-3">Your Roadmap to Success</h1>
                    <h4 className="text-center mb-4 pb-3">To-Do List</h4>
                    <FormAddNewTask onSave={onSave}/>
                    <hr className="my-4"/>
                    <TasksTable tasks={tasks} onDelete={onDelete} taskDone={taskDone}/>
                </div>
            </div>
        </div>

    );
}

export default Tasks;