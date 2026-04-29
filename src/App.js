import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './pages/Nav';
import './pages/style/style.css';
import { JsChalenge } from './JsChalenge';
import { CoreJavaScript } from './ js/CoreJavaScript';
import { MustDoQuestions } from './ js/MustDoQuestions';

function App() {
  return (
    <div className='p-4'>
      {/* <Nav /> */}
      {/* <CoreJavaScript /> */}
      <MustDoQuestions />
    </div>
  );
}

export default App;
