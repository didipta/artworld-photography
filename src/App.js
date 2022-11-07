
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthContext } from './Componen/Context/Authprovider';
import { routes } from './Componen/Routers/Router';

function App() {
  const { theme,setTheme}=useContext(AuthContext);
  return (
    <html data-theme={theme?"dark":"light"}>
       <RouterProvider router={routes}>
      
      </RouterProvider>
      </html>
  );
}

export default App;
