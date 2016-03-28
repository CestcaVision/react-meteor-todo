Tasks = new Mongo.Collection('tasks');
const {Card}=mui;
Todo = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe("tasks");
    return {
          items: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
        }
  },
  render(){
    return (<Card>
            <TodoHeader/>
            <TodoList items={this.data.items}/>
            </Card>
    )
  }
})
