import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function Subscribe() {
  // Initialize the form
  const { register, handleSubmit, watch ,formState:{errors}} = useForm({
    defaultValues: {
      name: "",
      email: "",
      age: ""
    }
  });

  // Subscription to all form changes
  // useEffect(() => {
  //   const subscription = watch((values, { name, type }) => {
  //     console.log("Form values:", values);   // all current form values
  //     console.log("Field changed:", name);   // which field changed
  //     console.log("Event type:", type);      // type of event: change, blur, focus
  //   });
  //   console.log("rerender")
  //   // Cleanup subscription on unmount
  //   return () => subscription.unsubscribe();
  // }, [watch]);
   
  // const name=watch("name")//here the component re render after every type
  // console.log(name)

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert(`Form Submitted:\n${JSON.stringify(data, null, 2)}`);
  };

  //below is the example for the second parameter of handleSubmit for error
  const onError=()=>{
    console.log("error occured while validating the form")
    console.log(errors.name)
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>React Hook Form - Subscription Example</h2>
      <form onSubmit={handleSubmit(onSubmit,onError)}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Name:</label>
          <input
            {...register("name",{required:"name is requied"})}
            placeholder="Enter name"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            {...register("email",{required:"email is required"})}
            placeholder="Enter email"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Age:</label>
          <input
            type="number"
            {...register("age",{max:100})}
            placeholder="Enter age"
            style={{ width: "100%", padding: "0.5rem", marginTop: "0.25rem" }}
          />
        </div>

        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Subscribe;
