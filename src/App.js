import './App.css';
import React from "react";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom" 
import LearningTabCongrats from "./components/LearningTabCongrats"
import LearningTabFeedback from "./components/LearningTabFeedback"
import LearningTabOverview from "./components/LearningTabOverview"
import UnderstandingDemAudio from "./components/UnderstandingDemAudio"
import UnderstandingDemVis from "./components/UnderstandingDemVis"
import Kinesthetic from './components/Kinesthetic';
import Home from "./components/Home"

function App() {
    return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/overview" element={<LearningTabOverview />}/>
          <Route path="/audio" element={<UnderstandingDemAudio />}/>
          <Route path="/visual" element={<UnderstandingDemVis />}/>
          <Route path="/feedback" element={<LearningTabFeedback />}/>
          <Route path="/congrats" element={<LearningTabCongrats />}/>
          <Route path="/Kinesthetic" element={<Kinesthetic/>}/>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;