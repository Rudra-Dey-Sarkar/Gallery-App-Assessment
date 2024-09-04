import { Context, ContextWrapper } from './components/GlobalContext/GlobalText';
import './App.css';
import HomePage from './components/Home/HomePage';

function App() {
  return (
    <ContextWrapper>
      <div className="App">
        <HomePage />
      </div>
    </ContextWrapper>
  );
}

export default App;
