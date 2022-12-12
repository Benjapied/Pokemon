
import { useForm } from "react-hook-form";
import { addToPokemon, UpdatePokemon } from "../api/pokemon";

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
    window.location.href = window.location.href + "?numero=" + data.numero ;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("numero")} placeholder="Numero" />
      <button type="submit">Valider</button>
    </form>
  );
}

export const UpdateForm = (pokemon) => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    UpdatePokemon(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("numero")} value={pokemon.numero} />
      <input {...register("name")} value={pokemon.name} />
      <input {...register("img")} value={pokemon.img} />
      <button type="submit">Valider</button>
    </form>
  );
}
