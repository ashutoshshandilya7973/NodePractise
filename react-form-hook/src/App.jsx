import {useForm} from "react-hook-form"
import IsDirty from "./components/IsDirty"
import Subscribe from "./components/Subscribe"

function App() {
  const {register,unregister,handleSubmit,formState:{errors}}=useForm({
    mode:"onTouched"
  })

  const onSubmit=(data)=>{
    console.log(data)
    console.log(errors)
  }
  const handleUnRegister=()=>{
    unregister("name")
  }
  return (
    //  <form onSubmit={handleSubmit(onSubmit)} className="w-xl m-auto bg-amber-300 text-center my-40 rounded-md">
    //      <div className="flex gap-2.5 p-2.5">
    //       <label htmlFor="name">Name:</label>
    //      <input type="text" id="name" {...register("name",{required:"email is required"})}  className="border-2 bg-amber-200 p-1"/>
    //      {errors?.name&&<p>{errors?.name.message}</p>}
    //      </div>
    //      <div className="p-1.5 bg-amber-100 w-fit m-auto my-2">
    //       <select {...register("category")}>
    //         <option value="A">A</option>
    //         <option value="B">B</option>
    //         <option value="C">C</option>
    //         <option value="D">D</option>
    //       </select>
    //      </div>
    //      <button type="button" onClick={handleUnRegister}>unRegister</button>
    //      <button className="p-1.5 bg-black rounded-md cursor-pointer text-white">submit</button>
    //  </form>
    // <IsDirty/>
    <Subscribe/>
   )
}

export default App
