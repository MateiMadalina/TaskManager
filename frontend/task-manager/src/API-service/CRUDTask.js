export const getTasks = async () => {
    return fetch("http://localhost:8080/task-manager/api/tasks").then(res => res.json());
}