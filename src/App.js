import React from 'react';
import Review from './Review';


function App() {
  return (
    <div>
      <main>
        <div className='container'>
          <div className='title'>
            <h2>Our reviews</h2>
            <div className='underline'></div>
            <Review />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
