
import { useForm } from "react-hook-form";
import { addToPokemon } from "../api/pokemon";

export const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    addToPokemon(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("numero")} placeholder="Numero" />
      <input {...register("name")} placeholder="Name" />
      <input {...register("img")} placeholder="Image" />
      <button type="submit">Valider</button>
    </form>
  );
}

export const FormChoose = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("numero")} placeholder="Numero" />
      <button type="submit">Valider</button>
    </form>
  );
}
