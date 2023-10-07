import "./App.css";
import { DataReader } from "./components/dataReader/DataReader";
import { DataProvider } from "./dataProvider/DataProvider";

function App() {
  return (
    <DataProvider>
      <DataReader />
    </DataProvider>
  );
}

export default App;
