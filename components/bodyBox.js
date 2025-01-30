import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class BodyBox extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>!Hello from body...</Text>
                <FlatList
                    data={this.props._items}
                    renderitem={(l) => {
                        console.log(l);
                        return <Text>1</Text>
                    }}
                />
            </View>
        );
    }
}
//
const styles = StyleSheet.create({
    container: {
        flex: 8,
        backgroundColor: '#98fb98',
    },
});