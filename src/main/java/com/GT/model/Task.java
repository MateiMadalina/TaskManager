package com.GT.model;

import com.GT.model.enums.TaskPriority;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private LocalDate dueDate;
    private boolean completed;
    private TaskPriority priority;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
