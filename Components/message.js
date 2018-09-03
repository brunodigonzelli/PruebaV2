import React from 'react';
import {Text} from 'react-native';
import styles from '../Styles/styles';
	
export default class Message extends React.Component{
	render(){
		return(
			<Text style={styles.message} >{this.props.seniorityLabel} </Text>
		);
	}
}

