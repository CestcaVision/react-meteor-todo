const {IconButton,Paper,Checkbox} = mui;
const {ContentRemoveCircle}=mui.SvgIcons;
Item = React.createClass({

  getInitialState(){
    return {
      delete:'none'
    }
  },

  handleClick(e){
    e.preventDefault();
    Meteor.call('deleteTask',this.props.id)
  },
  handleMouseOver(){
    this.setState({
      delete:'block',
    })
  },
  handleMouseLeave(){
    this.setState({
      delete:'none'
    })
  },

  handleToggle(e){
    e.preventDefault();
    Meteor.call('setChecked',this.props.id,!this.props.checked);
  },
  render(){

    const style = {
                height: 100,
                width: 200,
                margin: 20,
                textAlign: 'center',
                display: 'inline-block',
                position:'relative',
                padding: 40
          };
    return (
      <Paper onMouseOver={this.handleMouseOver} onMouseLeave={this.handleMouseLeave} zDepth={2} style={style}>
      <label>
      <input type='checkbox' onChange={this.handleToggle}
      checked={this.props.checked} /><strong>{this.props.content}</strong></label>
      <IconButton className='delete' onClick={this.handleClick} style={{position:'absolute',left:175,top:74,display:this.state.delete}}>
      <ContentRemoveCircle color={'red'}/>
      </IconButton>
      </Paper>
    )
  }
})
