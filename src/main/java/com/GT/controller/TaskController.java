package com.GT.controller;

import com.GT.model.Task;
import com.GT.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/task-manager/api/tasks")
public class TaskController {
    private TaskService taskService;

    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    @CrossOrigin
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }

    @PostMapping
    @CrossOrigin
    public void addTask(@RequestBody Task task){
        taskService.addTask(task);
    }

    @DeleteMapping("/{taskId}")
    @CrossOrigin
    public void deleteTask(@PathVariable Long taskId){
        taskService.deleteTask(taskId);
    }

    @PatchMapping("/{taskId}/done")
    @CrossOrigin
    public void markTaskAsDone(@PathVariable Long taskId){
        taskService.markTaskAsDone(taskId);
    }
}
