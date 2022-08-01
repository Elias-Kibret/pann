import './App.css';
import React from "react";
import { BrowserRouter as Router , Route, Routes} from "react-router-dom" 
import LearningTabCongrats from "./Components/LearningTabCongrats"
import LearningTabFeedback from "./Components/LearningTabFeedback"
import LearningTabOverview from "./Components/LearningTabOverview"
import UnderstandingDemAudio from "./Components/UnderstandingDemAudio"
import UnderstandingDemVis from "./Components/UnderstandingDemVis"
import Kinesthetic from './Components/Kinesthetic'
import Home from "./Components/Home"

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