import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} />
        ))
      )}
    </div>
  );
};

export default TaskList;