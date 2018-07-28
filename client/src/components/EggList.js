import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import API from './../utils/API';
import EggDetail from './EggDetail';
import Header from './Header';

class EggList extends Component {
    state = {
        habits: []
    }
    componentDidMount() {
        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            () => {this.loadHabits()},
        );
        
    }
    componentWillUnmount() {
        this.didFocusListener.remove();
    }

    loadHabits = () => {
        API.getHabits()
            .then(resData => this.setState({ habits: resData }))
            .catch(err => console.log(err))
    }
    renderEggs() {
        return this.state.habits.map(habit => {
            return <EggDetail key={habit._id} habit={habit} />
        })
    }
    render() {
        console.log(this.state);
        return (
            <ScrollView>
                <Header headerText={'The Aviary'} />
                {this.renderEggs()}
            </ScrollView>
        )
    }
}

export default EggList;