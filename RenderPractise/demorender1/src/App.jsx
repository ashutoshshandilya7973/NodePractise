import { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'
import {FormProvider, useForm} from "react-hook-form"

function App() {
  const [count, setCount] = useState(0);
 console.log("parents")
  return (
   <div className="">
    hello welcome to main
        <Child1/>
      <Child2/>
   </div>
  )
}

export default App
