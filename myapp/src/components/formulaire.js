
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
      <select {...register("type1", { required: true })}>
        <option value="None">Select...</option>
        <option value="feu">Feu</option>
        <option value="eau">Eau</option>
        <option value="plante">Plante</option>
      </select>
      <button type="submit">Valider</button>
    </form>
  );
}

export const FormChoose = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    window.location.href = "http://localhost:3000/admin?numero=" + data.numero ;
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
      <select {...register("type1", { required: true })}>
        <option value="None">Select...</option>
        <option value="feu">Feu</option>
        <option value="eau">Eau</option>
        <option value="plante">Plante</option>
      </select>
      <button type="submit">Valider</button>
    </form>
  );
}
