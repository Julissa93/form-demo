import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        //console.log(event.target.value)
        this.setState({username: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(event.target.username.value)
        //this.setState({username: event.target.username.value})
        //A good place to make your ajax request! Example: axios.post('/api/users', this.state.username)
    }

    render() {  
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username}></input>
               
                <input type="submit" />
                
            </form>
            </div>
         
        )
    }
}

export default Form