import { BrowserRouter } from "react-router-dom";
import RoutesApp from './routes/routes.js'
import { DataProvider } from "./context/Dataprovider.js";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
          <RoutesApp/>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;