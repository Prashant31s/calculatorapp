import React from 'react'

import { addToHistory,clearHistory } from '../actions'
import { connect } from 'react-redux';

const History =({history,addToHistory,clearHistory})=>{
  const handleAddToHistory = () => {
    addToHistory(input, result);
  };

  const handleClearHistory = () => {
    clearHistory();
  };
  return(
    <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item.expression}</li>
          ))}
        </ul>
        {/* <button onClick={handleAddToHistory}>Add to History</button> */}
        <button onClick={handleClearHistory}>Clear History</button>
    </div>
  );
}


const mapStateToProps = (state) => ({
  
  
  history: state.history
});

const mapDispatchToProps = {
  addToHistory,
  clearHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
