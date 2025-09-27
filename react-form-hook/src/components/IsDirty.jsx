import React from "react";
import { useForm } from "react-hook-form";
const IsDirty = () => {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm({
    defaultValues:{
        name:"",
        email:""
    }
  });

  const onSubmit = (data) => {
    console.log(data);
    // console.log(dirtyFields)
    // console.log(touchedFields)
    console.log(formState)
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
            <input {...register("email")} placeholder="email" />

      <button type="submit">Submit</button>
      {"" && <p>⚠️ You have unsaved changes!</p>}
    </form>
  );
};

export default IsDirty;
