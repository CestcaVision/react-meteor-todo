TodoList = React.createClass({
  render(){
    let allitems = _.map(this.props.items,(item,key)=>{
      return <Item content={item.content} id={item._id} checked={item.checked} key={key}/>
    })
    return (<div>
      {allitems}
    </div>)
  }
})
