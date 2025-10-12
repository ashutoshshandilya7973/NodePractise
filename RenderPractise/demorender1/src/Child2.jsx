import React, { useEffect, useRef, useState } from "react";

const Child2 = () => {
  const [change, setChange] = useState(0);
  console.log(change)
  const ref=useRef(0)

  useEffect(() => {
    if(!ref.current){
      console.log(" i am here")
    }
    ref.current= setInterval(() => setChange((prev) => prev + 1),500);
    return ()=>{
      console.log("cleanup happening");
      clearInterval(ref.current)
    }
  }, []);
  return <div>heelo i am child 2</div>;
};

export default Child2;
