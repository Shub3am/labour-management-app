import { StyleSheet, StatusBar } from "react-native"

const styles= StyleSheet.create({

  
    container: {
      paddingTop: StatusBar.currentHeight,
      height: "100%",
      width: "100%",
    },
    header: {
      textAlign: "center",
      fontSize: 20,
      
    },
    recent: {backgroundColor: "grey", padding: 10},
  recentItems: {
    padding: 10,
    backgroundColor: 'orange',
    margin: 5
  },
  tableN: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    padding:10
  },
  table: {
    backgroundColor: "black",
    color: "white",
    borderColor: "white",
    textAlign: "center"
  }
  });

  export default styles