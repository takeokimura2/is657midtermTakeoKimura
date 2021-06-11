import { StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    color: "teal",
    fontWeight: "bold"
  },
  mainBoxStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    margin: 10,
    padding:20,

  },
  examBoxStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "teal",
    width:300,
    height:200,
    margin: 10,
    padding:20,
  },
  titleText: {
    display: "flex",
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    justifyContent:"center"
  },
  subtitle: {
    display: "flex",
    color: "white",
    justifyContent:"center"
  },
  textStyle: {
    display: "flex",
    color: "black",
    padding: 5,
    maring: 10
  },
  textInput: {
    display: "flex",
    justifyContent: "flex-start",
    borderColor: "gray",
    borderWidth: 1,
    height: 40,
    padding: 5,
    margin: 5,
  },
  errorMessage: {
    color: "red",
  },
  successMessage: {
    color: "green",
  },
  buttonStyle:{
    size: "sm",
    margin: 10,
  },
  comparionBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 5,
    margin: 10,
  }
});

export default styles;