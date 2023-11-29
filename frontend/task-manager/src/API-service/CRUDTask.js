export const getTasks = async () => {
    return fetch("http://localhost:8080/task-manager/api/tasks").then(res => res.json());
}

export const addTask = async (newTask) => {
    try {
        const response = await fetch("http://localhost:8080/task-manager/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        });
    } catch (error) {
        console.error("Error adding task:", error);
        throw error;
    }
};