import React from 'react';
import {connect} from 'react-redux'
class AboutUs extends React.Component{
    constructor(props){
        super(props);
        console.log(props, 'todos')
    }

    render() {
        return (<div>This is about us !!!!!</div>)
    }
    
}

const matchStateToProps = (state) => ({
    todos: state  
})

export default connect(matchStateToProps, null)(AboutUs);