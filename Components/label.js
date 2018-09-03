import React from 'react';
import {Text, View} from 'react-native';
import styles from '../Styles/styles';

export default class Label extends React.Component{
	render(){
		return(
			<View style={styles.label}>
	          <Text style={styles.colorSecundario} >NEW SENIORITY LABEL</Text>
	          <Text style={styles.text}>{this.props.seniorityLabelActual}</Text>
	        </View>
		);
	}
}