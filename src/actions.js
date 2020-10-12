export function addTask() {
  return {
    type: 'addTask',
  };
}

export function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: { id },
  };
}

export function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: { title: taskTitle },
  };
}
