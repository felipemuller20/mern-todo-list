const validateCreateEntries = (task, status) => {
  if (!task) {
    return {
      code: 404,
      message: 'Task not found',
    };
  }
  if (!status) {
    return {
      code: 404,
      message: 'Status not found',
    };
  }
  return false;
};

module.exports = { 
  validateCreateEntries,
};
