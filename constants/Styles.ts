import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 15,
    marginTop: 3,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  button: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "20%",
    height: 80,
    zIndex: 1,
    backgroundColor: "orange",
  },
  buttonStyle: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 8,
    width: "100%",
    height: 80,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
  calculator: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  result: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
    borderColor: "black",
    width: "90%",
    maxWidth: 480,
    height: "20%",
    marginVertical: 5,
  },
  resultText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#424345",
  },
});

export default styles;
