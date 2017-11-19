import React from 'react'

const Sort = ({ title, setSort }) =>
  <div>
    <center>
      <strong>{title}</strong><br />
      <button onClick={() => setSort('date','desc')}>date descending</button>
      <button onClick={() => setSort('date','asc')}>date ascending</button>
      <button onClick={() => setSort('vote','desc')}>vote descending</button>
      <button onClick={() => setSort('vote','asc')}>vote ascending</button>
    </center>
  </div>

  export default Sort