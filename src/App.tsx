import './App.css';
import { Timer } from './components/UI/Timer';
import TestPage from './pages/TestPage';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Тестирование
        </p>
        <Timer duration={200} ></Timer>
      </header>
      <main>
        <TestPage />
      </main>
    </div>
  );
}

export default App;
