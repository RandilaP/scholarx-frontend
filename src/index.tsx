import React from 'react';

import ReactDOM from 'react-dom';
import UserLogin from './components/UserLogin/UserLogin.component';
function App() {
  return <div>
    <UserLogin/>
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
