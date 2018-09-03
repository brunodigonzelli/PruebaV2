import React from 'react';
import {Text, View, Slider} from 'react-native';
import styles from './Styles/styles';
import Label from './Components/label';
import SliderSeniority from './Components/slider';
import Message from './Components/message';
import seniorityL from './Components/seniority';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
      seniority: 'Junior',
      seniorityLabel: 'Te mantuviste igual, a hacer otro curso',
    };
  }
  seniority(value, seniority, seniorityLabel) {
    // Mensaje
    var seniorityValue;

    if(value > 1){
      seniorityValue = '¡Felicidades! Subiste de categoría ;)';
    }
    if(value < 1){
      seniorityValue = 'Bajaste de seniority :(';
    }
    if(value == 1){
      seniorityValue = 'Te mantuviste igual, a hacer otro curso';
    }
    //Seniority Level
    const i = value;
    var seniorityArray = seniorityL[i];
    
      this.setState(() => {
        return {
          seniority: seniorityArray,
          seniorityLabel: seniorityValue,
        };
      });
  }

  render() {
    const {value, seniority, seniorityLabel} = this.state;
    return (
      <View style={styles.container}>
          <Text style={styles.preexistente}>Selección preexistente: Junior </Text>
          <View style={styles.centrado}>
            <Label seniorityLabelActual={seniority} />
            <SliderSeniority value={value} seniorityFunction={seniorityFunction = (value, seniority, seniorityLabel) => { this.seniority(value, seniority, seniorityLabel) }} />
            <Message seniorityLabel={seniorityLabel} valuado={value} />
          </View>
          
      </View>
    );
  }
}
