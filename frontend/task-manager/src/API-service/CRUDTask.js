export const getTasks = async (token) => {
    return fetch("http://localhost:8080/task-manager/api/tasks",
        {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`
            }
        }).then(res => res.json());
}

export const addTask = async (newTask,token) => {
    try {
        const response = await fetch("http://localhost:8080/task-manager/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${token}`
            },
            body: JSON.stringify(newTask),
        });
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};

export const deleteTask = async (taskId,token) => {
    try {
        const response = await fetch(`http://localhost:8080/task-manager/api/tasks/${taskId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `${token}`
            },
        });
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

export const markTaskAsDone = async (taskId,token) => {
    try{
        const response = await fetch(`http://localhost:8080/task-manager/api/tasks/${taskId}/done`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
                'Authorization': `${token}`
            }
        })
    }catch (error){
        console.error("Error marking task as done: ",error);
        throw error;
    }
}