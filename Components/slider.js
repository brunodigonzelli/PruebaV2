import React from 'react';
import {Slider} from 'react-native';
import styles from '../Styles/styles';

export default class SliderSeniority extends React.Component{
	render(){
		const {value, seniorityFunction} = this.props;
		
		return(
			<Slider
	          step={1}
	          maximumValue={6}
	          onValueChange={seniorityFunction}
	          maximumTrackTintColor={'white'}
	          minimumTrackTintColor={'#74c5da'}
	          thumbTintColor={'#74c5da'}
	          style={styles.slider}
	          value={value}
	        />
		);
	}
}