import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import API from './../utils/API';
import EggDetail from './EggDetail';

class EggList extends Component {
    state = {
        eggs: []
    }
    componentDidMount() {
        API.getEggs().then(resData => this.setState({ eggs: resData }));
        // fetch('http://localhost:3001/api/eggs')
        // .then(res => res.json())
        // .then(resData => this.setState({ eggs: resData }));
    }

    renderEggs() {
        return this.state.eggs.map(egg => {
            return <EggDetail key={egg.egg_id} egg={egg} />
        })
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderEggs()}
            </ScrollView>
        )
    }
}

export default EggList;