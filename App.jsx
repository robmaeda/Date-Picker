import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { addDays } from 'date-fns';
import '/styles.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const App = () => {

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: 'selection'
    }
  ]);

  return (
    <div id='app'>
      <DateRangePicker
        onChange={item => setRange([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={range}
        direction='horizontal'
        minDate={addDays(new Date(), 0)}
        maxDate={addDays(new Date(), 180)}
      />
    </div>

  )
}

ReactDom.render(<App />, document.getElementById('root'));