import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import SideB from './components/sidebar/sidebar';
import { NavBar } from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProSidebarProvider>
        <SideB />
      </ProSidebarProvider>
    </div>
  );
}

export default App;
