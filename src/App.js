import React, { useState } from 'react';
import { DateRangePicker } from './lib';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);
  const [dateRange, setDateRange] = useState([null, null]);

  return (
    <div className="App">
      <div className="demo-container">
        <h1>React Datella Demo</h1>
        <button 
          className="demo-button"
          onClick={() => setVisible(true)}
        >
          选择日期范围
        </button>
        <div className="selected-range">
          {dateRange[0] && dateRange[1] ? (
            `选择的日期范围: ${dateRange[0].toLocaleDateString()} - ${dateRange[1].toLocaleDateString()}`
          ) : '未选择日期范围'}
        </div>
        <DateRangePicker
          visible={visible}
          onClose={() => setVisible(false)}
          onConfirm={(range) => {
            setDateRange(range);
            setVisible(false);
          }}
          defaultValue={dateRange}
        />
      </div>
    </div>
  );
}

export default App;