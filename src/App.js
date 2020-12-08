import Header from './component/Header.js';
import Footer from './component/Footer.js';
import Uploader from './component/Uploader.js';
import './css/styles.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Uploader/>
      <Footer/>
    </div>
  );
}

export default App;
