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
                <option value="acier">Acier</option>
                <option value="dragon">Dragon</option>
                <option value="electrik">Electrik</option>
                <option value="insecte">Insecte</option>
                <option value="psy">Psy</option>
                <option value="sol">Sol</option>
                <option value="tenebre">Tenèbre</option>
                <option value="combat">Combat</option>
                <option value="fee">Fée</option>
                <option value="glace">Glace</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="spectre">Spectre</option>
                <option value="roche">Roche</option>
                <option value="vol">Vol</option>
            </select>
            <select {...register("type2", { required: true })}>
                <option value="None">Select...</option>
                <option value="feu">Feu</option>
                <option value="eau">Eau</option>
                <option value="plante">Plante</option>
                <option value="acier">Acier</option>
                <option value="dragon">Dragon</option>
                <option value="electrik">Electrik</option>
                <option value="insecte">Insecte</option>
                <option value="psy">Psy</option>
                <option value="sol">Sol</option>
                <option value="tenebre">Tenèbre</option>
                <option value="combat">Combat</option>
                <option value="fee">Fée</option>
                <option value="glace">Glace</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="spectre">Spectre</option>
                <option value="roche">Roche</option>
                <option value="vol">Vol</option>
            </select>
            <button type="submit">Valider</button>
        </form>
    );
}
