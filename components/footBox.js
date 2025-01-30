import React from 'react';
import { Text, View, Button } from 'react-native';

export default class FootBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                <Text>!Hello, from FootBox.</Text>
                <Button title="ok" onPress={() => {
                    console.log('!button ok is pressed.');
                    //console.log( this.state.counter );
                    this.props._increment();
                }} />
            </View>
        );
    }
}