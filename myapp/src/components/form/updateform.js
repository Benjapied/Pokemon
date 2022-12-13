import { useForm } from "react-hook-form";
import { UpdatePokemon } from "../../api/pokemon.js";

//Formulaire qui modifie un pokemon
export const UpdateForm = (pokemon) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        UpdatePokemon(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("numero")} defaultValue={pokemon.numero} />
            <input {...register("name")} defaultValue={pokemon.name} />
            <input {...register("img")} defaultValue={pokemon.img} />
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
