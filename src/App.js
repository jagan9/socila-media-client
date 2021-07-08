import './App.css';
import { BrowserRouter as Router, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import Main from './components/Main';
import circle1 from './Media/circle1.png';
import circle2 from './Media/circle2.png';
import circle3 from './Media/circle3.png';
import circle4 from './Media/circle4.png';
import circle5 from './Media/circle5.png';
import circle6 from './Media/circle6.png';

function App() {

  let numberofbubble = Math.floor(Math.random() * 8) + 5;
  console.log(numberofbubble)
  let bubbles = [];
  for (var i = 0; i < numberofbubble; i++) {
    let x = Math.floor(Math.random() * 100) - 10;
    let y = Math.floor(Math.random() * 100) - 10;
    let r = Math.floor(Math.random() * 130) + 40;
    let ra = Math.floor(Math.random() * 255);
    let rb = Math.floor(Math.random() * 255);
    let rc = Math.floor(Math.random() * 255);
    bubbles.push({
      x: x,
      y: y,
      r: r,
      ra: ra,
      rb: rb,
      rc: rc
    })


  }
  return (
    <div className="App">
      <HashRouter>
        <Provider store={Store}>
          <Main />
        </Provider>
      </HashRouter>
      <div style={{ backgroundAttachment: "fixed", backgroundColor: "rgba(254,254,254,0.2)", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", zIndex: "-1" }}>
        {
          bubbles.map((bubble, i) => (<div key={i} style={{
            opacity: "0.3",
            zIndex: "-1",

            height: bubble.r, width: bubble.r,
            borderRadius: "50%", backgroundColor: `rgb(${bubble.ra},${bubble.rb},${bubble.rc})`,
            position: 'absolute', top: `${bubble.x}%`, left: `${bubble.y}%`
          }}></div>))
        }
      </div>

      {/* <div style={{ backgroundAttachment: "fixed", backgroundColor: "rgba(254,254,254,0.2)", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", zIndex: "-1" }}>
        <img className="cir1 rotator animation" src={circle1} alt="circle 1"></img>
        <img className="cir2 rotator animation" src={circle2} height="100px" width="100px" alt="circle 1"></img>
        <img className="cir3 rotator animation" src={circle3} alt="circle 1"></img>
        <img className="cir4 rotator animation" src={circle4} height="60px" width="60px" alt="circle 1"></img>
        <img className="cir5 rotator animation" src={circle5} height="200px" width="200px" alt="circle 1"></img>
        <img className="cir6 rotator animation" src={circle6} height="130px" width="130px" alt="circle 1"></img>
        <img className="cir7 rotator animation" src={circle3} alt="circle 1"></img>
        <img className="cir8 rotator animation" src={circle4} height="70px" width="70px" alt="circle 1"></img>
        <img className="cir9 rotator animation" src={circle6} height="70px" width="70px" alt="circle 1"></img>

      </div> */}
    </div>
  );
}

export default App;
