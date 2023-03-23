import './App.scss';
import Header from './Header';
import MainSection from './MainSection';
import BottomSection from './BottomSection';


function App() {
  return (
    <div>
      <div className="wrapper">
        <Header/>
        <main className='main-block'>
          <MainSection />
          <BottomSection />
        </main>
      </div>
    </div>
  );
}

export default App;
