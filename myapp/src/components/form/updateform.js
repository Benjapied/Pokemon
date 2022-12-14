import { useForm } from "react-hook-form";
import { UpdatePokemon } from "../../api/pokemon.js";
import Form from 'react-bootstrap/Form';
import "../../style.css";

//Formulaire qui modifie un pokemon
export const UpdateForm = (pokemon) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        UpdatePokemon(data);
    }

    console.log(pokemon);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("numero")} defaultValue={pokemon.numero} />
            <input {...register("name")} defaultValue={pokemon.name} />
            <input {...register("img")} defaultValue={pokemon.img} />
            <div className="formSelect">
            <Form.Select {...register("type1", { required: true })} aria-label="Default select example" >
                <option>Type 1</option>
                <option value="None">None</option>
                <option value="feu">Feu</option>
                <option value="eau">Eau</option>
                <option value="plante">Plante</option>
                <option value="acier">Acier</option>
                <option value="dragon">Dragon</option>
                <option value="elektrik">Elektrik</option>
                <option value="insecte">Insecte</option>
                <option value="psy">Psy</option>
                <option value="sol">Sol</option>
                <option value="tenebre">Ténèbre</option>
                <option value="combat">Combat</option>
                <option value="fee">Fée</option>
                <option value="glace">Glace</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="spectre">Spectre</option>
                <option value="roche">Roche</option>
                <option value="vol">Vol</option>
            </Form.Select>
            <Form.Select {...register("type2", { required: true })} aria-label="Default select example" >
                <option>Type 2 </option>
                <option value="None">None</option>
                <option value="feu">Feu</option>
                <option value="eau">Eau</option>
                <option value="plante">Plante</option>
                <option value="acier">Acier</option>
                <option value="dragon">Dragon</option>
                <option value="elektrik">Elektrik</option>
                <option value="insecte">Insecte</option>
                <option value="psy">Psy</option>
                <option value="sol">Sol</option>
                <option value="tenebre">Ténèbre</option>
                <option value="combat">Combat</option>
                <option value="fee">Fée</option>
                <option value="glace">Glace</option>
                <option value="normal">Normal</option>
                <option value="poison">Poison</option>
                <option value="spectre">Spectre</option>
                <option value="roche">Roche</option>
                <option value="vol">Vol</option>
            </Form.Select>
            </div>
            <button type="submit">Valider</button>
        </form>
    );
}
