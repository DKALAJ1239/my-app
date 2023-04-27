//The index/app page. Calls in the navigate feature and works from there.
import { StyleSheet} from "react-native";
// import HomeScreenMain from "./screens/HomeScreenMain";
import Navigate from "./components/Navigate";

function App() {
  return <Navigate />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
