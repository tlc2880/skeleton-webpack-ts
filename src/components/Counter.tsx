import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h4>Hello Tommy Cao the count and edit src/App.tsx, state is preserved</h4>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  )
}
export default Counter
