import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import Button from './Button';

import API from './../utils/API';

class Add extends Component {
    state = {
        name: '',
        iteration: '1',
        count: 0,
        complete: false,
        description: '',
        egg: {}
    }

    
    componentDidMount() {
        this.didFocusListener = this.props.navigation.addListener(
            'didFocus',
            () => {this.handleRandomEgg()},
          ); 
    }
    
    componentWillUnmount() {
        this.didFocusListener.remove();
    }
    handleRandomEgg = () => {
        let randomEgg = parseInt(Math.floor(Math.random()*4));
        console.log(randomEgg);
        API.getEgg(randomEgg).then(resData => this.setState({ egg: resData }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        console.log(event);
        // const { name, value } = event.target;
        // this.setState({
        //     [name]: value
        // });
    }

    handleSubmit = event => {
        // event.preventDefault();
        console.log('HERE IS THE SUBMIT', this.state);
        const { navigate } = this.props.navigation;
        API.saveHabit({
            name: this.state.name,
            iteration: parseInt(this.state.iteration),
            count: this.state.count,
            complete: this.state.complete,
            description: this.state.description,
            egg: this.state.egg
        })
        .then(() => navigate('HabitList'))
        .catch(err => console.log(err));
    }
    render() {
        console.log('egg state', this.state.egg);
        

        return(
            <View>
                <Text>THis is teh add page</Text>
                <FormLabel>Habit Name</FormLabel>
                <FormInput onChangeText={text => this.setState({ name: text })} name='name' value={this.state.name}/>
                <FormLabel>Number of Times/Day</FormLabel>
                <FormInput onChangeText={text => this.setState({ iteration: text })} name='iteration' value={this.state.iteration}/>
                <FormLabel>Notes</FormLabel>
                <FormInput onChangeText={text => this.setState({ description: text })} name='description' value={this.state.description}/>
                <Button onPress={() => this.handleSubmit()}>
                    Add Habit
                </Button>
            </View>
        )
    }
}

export default Add;