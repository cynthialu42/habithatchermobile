import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, Text, Image } from 'react-native';
import API from './../utils/API';
import HabitDetail from './HabitDetail';
import Header from './Header';
import Card from './Card';
import CardSection from './CardSection';
import Swipeout from 'react-native-swipeout';


class HabitList extends Component {
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
        API.getHabits().then(resData => this.setState({ habits: resData }));
    }
    handleDelete = (id) => {
        API.deleteHabit(id).then(res => this.loadHabits());
    }

    renderHabits() {
        const { 
            headerContentStyle, 
            thumbnailStyle, 
            thumbnailContainerStyle, 
            titleStyle,
            imageStyle,
            addButtonStyle,
            addTextStyle
        } = style;

        

        return this.state.habits.map(habit => {
            // console.log(habit.count);
            // return <HabitDetail key={habit._id} habit={habit} updateCount={() => this.updateCount()}/>
            const swipeBtns = [{
                text: 'Delete',
                fontSize: 20,
                backgroundColor: '#f44336',
                underlayColor: 'rgba(0, 0, 0,0.6)',
                onPress: () => this.handleDelete(habit._id)
            }]
            return(
                <Swipeout right={swipeBtns}
                    autoClose = {true}
                    backgroundColor='transparent'>
                    <Card key={habit._id}>
                        <CardSection>
                            <View style={thumbnailContainerStyle}>
                            
                                {habit.count < habit.egg.hatching_number ?
                                    <Image style={thumbnailStyle} source={{ uri: habit.egg.start_img }} />
                                    :
                                    <Image style={thumbnailStyle} source={{ uri: habit.egg.hatch_img }} />
                                }
                            </View>
                            <View style={headerContentStyle}>
                                <Text style={titleStyle}>{habit.name}</Text>
                                <Text>{habit.count}/{habit.iteration}</Text>
                            </View>
                            <TouchableOpacity style={addButtonStyle} onPress={() => this.updateCount(habit._id, habit.count, habit.iteration, habit.egg.hatching_number)}>
                                <Text style={addTextStyle}>+</Text>
                            </TouchableOpacity>
                        </CardSection>
                    </Card>
                </Swipeout>
            )
        })
    }

    updateCount(id, count, iteration, hatching_number){
        console.log('UPDATING COUNT', id, count, iteration, hatching_number);
        let updateCount = parseInt(count) + 1;
        console.log(updateCount);
        let isComplete = false;
        let hatched = false;

        if(updateCount === iteration) {
            isComplete = true;
        }

        if(parseInt(hatching_number)-1 <= parseInt(count)){
            hatched = true;
        }

        let countData = {
            count: updateCount,
            complete: isComplete,
            'egg.is_hatched': hatched
        }

        console.log(countData);
        API.updateCount(id, countData)
            .then(res => this.loadHabits())
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state);
        
        return (
            <ScrollView>
                <Header headerText={'Habit List'} />
                {this.renderHabits()}
                
            </ScrollView>
        )
    }
}
const style = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        flex: 1
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    titleStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    },
    addButtonStyle:{
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingLeft: 10,
        paddingRight: 10
    },
    addTextStyle:{
        fontSize: 30,
        color: '#37a69a'
    }
};
export default HabitList;