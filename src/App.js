import { BrowserRouter } from "react-router-dom";
import RoutesApp from './routes/routes.js'
import { DataProvider } from "./context/Dataprovider.js";

function App() {
  return (
      <BrowserRouter>
        <DataProvider>
          <RoutesApp/>
        </DataProvider>
      </BrowserRouter>
  );
}

export default App;