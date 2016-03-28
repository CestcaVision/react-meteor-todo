const {TextField, RaisedButton,FloatingActionButton,Badge}=mui;
const {ContentAdd, SocialNotifications}=mui.SvgIcons;
TodoHeader = React.createClass({
  mixins:[ReactMeteorData],
  getMeteorData(){
    Meteor.subscribe('tasks');
    return {
      items: Tasks.find({checked:{$ne: true}}).count()
    }
  },
  getInitialState(){
    return {
      value:''
    }
  },
  handleSubmit(e){
    e.preventDefault();
    var newtask = this.refs.newtask.getValue();
    Meteor.call('addTask',newtask);
    this.setState({value:''})
  },
  inputTask(){
    this.setState({value:this.refs.newtask.getValue()})
  },
  render(){
    return (<div>
      <h1>Todo</h1>
      <Badge
      badgeContent={this.data.items}
      primary={true}
    >
      <SocialNotifications />
    </Badge>
      <form onSubmit={this.handleSubmit}>
      <TextField  floatingLabelText='Add New Task' onChange={this.inputTask} value={this.state.value} ref='newtask'/>
      <FloatingActionButton style={{marginBottom: 0}} mini={true} type='submit'>
        <ContentAdd />
      </FloatingActionButton>
      </form>
    </div>)
  }
})
