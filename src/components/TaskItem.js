import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="task-item">
      <div className="task-content">
        <button
          onClick={() => toggleComplete(task.id)}
          className={task.completed ? 'status-btn completed' : 'status-btn incomplete'}
        >
          <FontAwesomeIcon icon={task.completed ? faCheck : faTimes} className="status-icon" />
        </button>
        <span onClick={() => toggleComplete(task.id)} style={{ cursor: 'pointer' }}>
        </span>
        <p className={task.completed ? 'text-decoration-style' : null}>{task.name}</p>
      </div>
      <button onClick={() => deleteTask(task.id)} className="delete-btn" title="Delete Task">
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TaskItem;