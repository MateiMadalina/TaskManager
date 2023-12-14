package com.GT.controller;

import com.GT.model.Task;
import com.GT.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/task-manager/api/tasks")
public class TaskController {
    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks(Principal connectedUser){
        return taskService.getAllTasks(connectedUser);
    }

    @PostMapping
    public void addTask(@RequestBody Task task,Principal connectedUser){
        taskService.addTask(task,connectedUser);
    }

    @DeleteMapping("/{taskId}")
    public void deleteTask(@PathVariable Long taskId){
        taskService.deleteTask(taskId);
    }

    @PatchMapping("/{taskId}/done")
    public void markTaskAsDone(@PathVariable Long taskId){
        taskService.markTaskAsDone(taskId);
    }
}
