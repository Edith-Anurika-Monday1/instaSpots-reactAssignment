import './App.css';
import InstaSpot from './main';
import headerSection from './Components/headerSection.jsx';
import footerSection from './Components/footerSection.jsx';


function App() {
  return (
    <div>
      <headerSection />
      <InstaSpot />
      <footerSection />
    </div>
  );
}

export default App;