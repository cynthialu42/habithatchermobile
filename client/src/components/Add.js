import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import Button from './Button';
import Header from './Header';
import Card from './Card';
import CardSection from './CardSection';

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
            <ScrollView>
                <Header headerText={'Add a Habit'} />

                <Card>
                    {/* <View style={{flex: 1}}> */}
                    <CardSection>
                        <Image style={style.addImgStyle} source={{ uri: 'https://i.imgur.com/osFqr4D.png'}} />
                    </CardSection>
                        
                        <FormLabel>Habit Name</FormLabel>
                        <FormInput onChangeText={text => this.setState({ name: text })} name='name' value={this.state.name}/>
                        <FormLabel>Number of Times/Day</FormLabel>
                        <FormInput onChangeText={text => this.setState({ iteration: text })} name='iteration' value={this.state.iteration}/>
                        <FormLabel>Notes</FormLabel>
                        <FormInput onChangeText={text => this.setState({ description: text })} name='description' value={this.state.description}/>
                        <View style={{flex: 1}}>
                        <Button onPress={() => this.handleSubmit()}>
                            Add Habit
                        </Button>
                        </View>
                    {/* </View> */}
                </Card>
            </ScrollView>
        )
    }
}

const style = {
    addImgStyle: {
        height: 300,
        flex: 1,
        width: null
    }
}
export default Add;