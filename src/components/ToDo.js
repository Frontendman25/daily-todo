import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ToDo.css'

export default class ToDo extends Component {
  constructor(props) {
    super(props);
    this.taskText = React.createRef();
    this.itemTitle = React.createRef();
  }
  
  static propTypes = {
    prop: PropTypes.func
  }

  state = {
    task: '',
    tasks: [
			{
        isEdit: false,
				title: 'Create ToDo',
			},
			{
        isEdit: false,
				title: 'Get the job',
			},
		]
  }

  onChange = (e) => {
    this.setState({...this.state, [e.target.name]: e.target.value})
    console.log(this.state.taskEdit)
  }

  addTask = () => {
    if(this.state.task === '') return

    this.setState({
      ...this.state,
      tasks: [
        {
          title: this.state.task,
        },
        ...this.state.tasks
      ]
    })

    let taskTitle = JSON.stringify(this.state.task)
    let save = localStorage.setItem('taskTitle', taskTitle)

    this.taskText.current.value = ''
  }

  deleteTask = (item) => {
    this.setState({
      tasks: this.state.tasks.filter(el => el != item)
    })
  }

  editTask = (item) => {
    item.isEdit = !item.isEdit
    // let innerTextP = this.itemTitle.current.innerText
    if(this.state.taskEdit == item.title){
      item.title = this.state.taskEdit
    }
    
    this.setState({
      ...this.state,
    })

    //this.itemTitle.current.innerText = this.state.taskEdit
    //console.log(this.state.taskEdit, this.itemTitle.current.innerText)
  }

  render() {
    //const itemTitle = this.itemTitle.current.innerText
    const {tasks} = this.state
    // ?????? console.log(itemTitle)
    return (
      <React.Fragment>
        <div className="taskText">
          <input
            onChange={this.onChange}
            type="text"
            name="task"
            ref={this.taskText}
            />
          <button onClick={this.addTask} style={{marginLeft: '10px'}}>Add</button>
        </div>
        {tasks.map((item, i) => (
          <div className="task" key={i}>
            <div className="taskWrap">
              {!item.isEdit
                ?
                  <p className="taskAbout" ref={this.itemTitle}>{item.title}</p>
                : 
                  <input name="taskEdit" onChange={this.onChange} style={{width: "98%", color: 'orange'}} type="text" defaultValue={item.title} />
              }
            </div>
            <div>
              <button onClick={this.editTask.bind(this, item)} className='edit'>Edit</button>
              <button className='delete' onClick={this.deleteTask.bind(this, item)}>Delete</button>
          </div>
          </div>

        ))}
      </React.Fragment>
    )
  }
}
