import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import InputNumber from './InputNumber'

function App (root) {
  const [value, setValue] = useState(1)

  return (
    <div>
      <InputNumber
        value={value} onChange={(e) => { setValue(e.target.value) }}
      />
      <InputNumber
        defaultValue={value} onChange={e => {}}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
