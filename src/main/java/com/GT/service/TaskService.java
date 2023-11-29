package com.GT.service;

import com.GT.model.Task;
import com.GT.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {
    private TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    public void addTask(Task task){
        taskRepository.save(task);
    }

    public void deleteTask(Long taskId){
        System.out.println("Deleting task with ID: " + taskId);
        taskRepository.deleteById(taskId);
    }
}
