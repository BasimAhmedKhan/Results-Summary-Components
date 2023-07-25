import './App.css';
import Result from './components/result/Result';
import Summary from './components/summary/Summary';

function App() {
  return (
    <div className="container center">
      <div className="box center">
        <Result />
        <Summary />
      </div>
    </div>
  );
}

export default App;
