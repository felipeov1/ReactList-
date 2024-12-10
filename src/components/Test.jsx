import React from "react";

class Task extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            message: "Hello world!"
        }
    }

    render(){
        return <h1>test</h1>
    }
}

export default Task;