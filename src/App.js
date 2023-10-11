import './App.css';
import PageRoutes from './Routes';
// export const baseUrl = "https://sliit-ead.azurewebsites.net/api";
export const baseUrl = "https://localhost:44321/api";

function App() {
  return (
    <div className="App">
     <PageRoutes/>
    </div>
  );
}

export default App;
