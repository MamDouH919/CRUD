import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './component/Login';
import ListPickups from './component/ListPickups';
import OneListPickup from './component/OneListPickup';
import CreatePickup from './component/CreatePickup';
import EditPickup from './component/EditPickup';
import DeletePickup from './component/DeletePickup';
import FirstForm from './component/FirstForm';
import RegForm from './component/RegForm';
import IntegrationForm from './component/IntegrationForm';
import ControllerComponent from './component/ControllerComponent';
import UseController from './component/useController';
import HandleError from './component/HandleError';
import Error from './component/Error';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/listpickups" element={<ListPickups />}/>
        <Route exact path="/listpickups/:id" element={<OneListPickup />}/>
        <Route exact path="/editpickup/:id" element={<EditPickup />}/>
        <Route exact path="/deletepickup/:id" element={<DeletePickup />}/>
        <Route exact path="/createnewpickup" element={<CreatePickup />}/>
        <Route exact path="/firstform" element={<FirstForm />}/>
        <Route exact path="/regform" element={<RegForm />}/>
        <Route exact path="/integrationform" element={<IntegrationForm />}/>
        <Route exact path="/controllercomponent" element={<ControllerComponent />}/>
        <Route exact path="/usecontroller" element={<UseController />}/>
        <Route exact path="/handleerror" element={<HandleError />}/>
        <Route exact path="/error" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
