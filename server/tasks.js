Tasks = new Mongo.Collection('tasks');
Meteor.methods({
  addTask: function(content){
    var task = {
      content:content,
      createdAt:new Date()
    }
    Tasks.insert(task)
  },
  deleteTask: function (taskId) {
    Tasks.remove(taskId);
  },
  setChecked: function (taskId,setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} })
}})
