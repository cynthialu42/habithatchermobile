import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import API from './../utils/API';

class EggList extends Component {
    state = {
        eggs: []
    }
    componentDidMount() {
        // API.getEggs().then(resData => this.setState({ eggs: resData }));
        fetch('http://localhost:3001/api/eggs')
        .then(res => res.json())
        .then(resData => this.setState({ eggs: resData }));
    }

    render() {
        console.log(this.state);
        return (
            <Text>Hey this is the egg page</Text>
        )
    }
}

export default EggList;