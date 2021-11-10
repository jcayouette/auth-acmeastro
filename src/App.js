import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import Equipment from "./components/devices/Equipment";
import Profiles from "./components/user_profiles/Profiles";
import Settings from "./components/admin/Settings";
import TargetSelector from "./components/target_utilities/target_selector/targetselector";
import TargetFraming from "./components/target_utilities/target_framing/Target_Framing";
import ImageSequencer from "./components/target_utilities/image_sequencer/Sequencer";
import ScientificData from "./components/data/scientific_data/Scientific_data";
import ObservingConditions from "./components/data/observing_conditions_data/Observing_Conditions";
import About from "./components/About";
import Login from "./components/authentication/Login";
import Logout from "./components/authentication/Logout";

function App() {
  return <Router>
      <nav style={{ margin: 10 }}>
          <Link to="/" style={{ padding: 5 }}>Home</Link>
          <Link to="/equipment" style={{ padding: 5}}>Equipment</Link>
          <Link to="/profiles" style={{ padding: 5 }}>Profiles</Link>
          <Link to="/settings" style={{ padding: 5 }}>Settings</Link>
          <Link to="/targetselector" style={{ padding: 5}}>Select Target</Link>
          <Link to="/targetframing" style={{ padding: 5}}>Frame Target</Link>
          <Link to="/imagesequencer" style={{ padding: 5}}>Image Sequencer</Link>
          <Link to="/scientificdata" style={{ padding: 5}}>Scientific Data</Link>
          <Link to="/observingconditions" style={{ padding: 5}}>Observing Conditions</Link>
          <Link to="/about" style={{ padding: 5 }}>About</Link>
          <Link to="/login" style={{ padding: 5 }}>Login</Link>
          <Link to="/logout" style={{ padding: 5 }}>Logout</Link>
          {
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/equipment" element={<Equipment/>} />
                  <Route path="/profiles" element={<Profiles/>} />
                  <Route path="/settings" element={<Settings/>} />
                  <Route path="/targetselector" element={<TargetSelector/>} />
                  <Route path="/targetframing" element={<TargetFraming/>} />
                  <Route path="/imagesequencer" element={<ImageSequencer/>} />
                  <Route path="/scientificdata" element={<ScientificData/>} />
                  <Route path="/observingconditions" element={<ObservingConditions/>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/logout" element={<Logout/>} />
              </Routes>
          }
      </nav>
  </Router>;
}
export default App;
