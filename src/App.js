import './App.css';
import Navbar from './components/Navbar';
import News from './components/News.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App bg-[#121212] text-white">
        <Navbar />
        <News />
      </div>
    </Provider>
  );
}

export default App;













/*
  REDUX THUNK:
  - Middleware
  - Special Action creator
    - which return a function which can further dispatch actions
    - This function has access to dispatch, getState
  - Used for Asynchronous operations (APIs)
  - Specifically for APIs:
    - Loading
    - Success
    - Failed
*/