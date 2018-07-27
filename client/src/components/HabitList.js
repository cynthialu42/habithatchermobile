import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import API from './../utils/API';
import HabitDetail from './HabitDetail';

class HabitList extends Component {
    state = {
        habits: []
    }

    componentDidMount() {
        this.loadHabits();
    }

    loadHabits = () => {
        API.getHabits().then(resData => this.setState({ habits: resData }));
    }
    renderHabits() {
        return this.state.habits.map(habit => {
            return <HabitDetail key={habit._id} habit={habit} />
        })
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderHabits()}
            </ScrollView>
        )
    }
}

export default HabitList;