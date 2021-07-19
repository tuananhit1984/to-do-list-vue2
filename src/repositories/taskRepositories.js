const taskList = [
    {
        id: 1,
        name: 'di hoc'
    },
    {
        id: 2,
        name: 'di lam'
    },
    {
        id: 3,
        name: 'di choi'
    }
]

export const taskRepository = {
    addTask: function(taskName) {
      // const newTaskId = max(taskList.map(obj => Number(obj.id)));
      const arr = taskList.map(obj => obj.id);
      const id = Math.max(...arr) + 1;
      taskList.push({id, name: taskName});
    },
    editTask: function(task) {
        const taskObj = taskList.filter((item)=>item.id==task.id)[0];
        taskObj.name = task.name;
        return taskObj;
    },
    deleteTask: function(id) {
        const index = taskList.indexOf(taskList.filter((item)=>item.id==id)[0]);
        taskList.splice(index, 1)
    },
    searchByName: function(nameInput) {
        if(nameInput){
            return taskList.filter((item) => item.name.toLowerCase().includes(nameInput.toLowerCase()));
        }
        else {
          return taskList;
        }
    },
    getDataList: function() {
        return taskList;
    },
    findbyid: function(id) {
        const taskObj = taskList.filter((item)=>item.id==id)[0];
        return taskObj;
    },
}