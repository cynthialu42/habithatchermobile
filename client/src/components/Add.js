import React, { Component } from 'react';
import { Text } from 'react-native';
import API from './../utils/API';

class Add extends Component {
   

    state = {
        name: '',
        iteration: 1,
        count: 0,
        complete: false,
        description: '',
        egg: {}
    }

    componentDidMount() {
        this.handleRandomEgg();
    }

    handleRandomEgg = () => {
        let randomEgg = parseInt(Math.floor(Math.random()*4));
        console.log(randomEgg);
        API.getEgg(randomEgg).then(resData => this.setState({ egg: resData }))
        .catch(err => console.log(err));
    }
    render() {
        console.log('egg state', this.state.egg);
        return(
            <Text>THis is teh add page</Text>
        )
    }
}

export default Add;