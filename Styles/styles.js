import { StyleSheet } from 'react-native';
let Primario = '#472d9a';
let Secundario = '#74c5da';
export default StyleSheet.create({
  label: {
    width: '90%',
    height: 90,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Primario,

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#312434',
  },
  text: {
    fontSize: 30,
    color: 'white',
  },
  colorSecundario: {
  	color: Secundario,
  },
  preexistente: {
  	width: '100%',
  	padding: 8,
  	textAlign: 'center',
  	backgroundColor: Secundario,
  	marginTop: 50,
    fontSize: 20,
  },
  centrado: {
  	flex: 1,
  	width: '100%',
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  slider: {
  	width: '100%',
  	marginTop: 10,
  	marginBottom: 10,
  },
  message: {
  	color: 'white',
  },
});