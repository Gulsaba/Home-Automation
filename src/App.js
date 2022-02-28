import {Route} from 'react-router-dom';
import './App.css';
import DataContextProvider from '../src/StoredData/AuthContext'
import Header from './component/Header/Header';
import AutomationLinks from './Pages/Automation/links'
import HomeAuto from './Pages/Automation/HomeAuto'
import SignUp from './Pages/Automation/Sign-Up';
import SignIn from './Pages/Automation/Sign-in';
import NodeJs from './Pages/NodeJs/NodeJs';



function App() {

  return (
    <div className="App">
      <DataContextProvider>
         <Header/>
       < AutomationLinks/>
        
         <main>
      <Route path="/" exact>
       <NodeJs/>
       </Route>
       <Route path="/Logo">
       <NodeJs/>
       </Route>
         <Route path="/home-automation">
         <HomeAuto/>
         </Route>
         <Route path="/sign-in">
         <SignUp/>
         </Route>
         <Route path="/sign-up">
         <SignIn/>
         </Route>
         </main>
       </DataContextProvider>
    </div>
  );
  }

export default App;
