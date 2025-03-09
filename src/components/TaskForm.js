import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskName}
        required
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-btn">
        <FontAwesomeIcon icon={faPlus} /> Add Task
      </button>
    </form>
  );
};

export default TaskForm;