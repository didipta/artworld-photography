
import { useContext } from 'react';
import './App.css';
import { AuthContext } from './Componen/Context/Authprovider';
import Main from './Componen/Layout/Main';

function App() {
  const { theme,setTheme}=useContext(AuthContext);
  return (
    <html data-theme={theme?"dark":"light"}>
       <Main></Main>
      </html>
  );
}

export default App;
