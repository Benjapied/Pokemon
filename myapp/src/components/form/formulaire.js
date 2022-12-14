
import { useForm } from "react-hook-form";
import { addToPokemon } from "../../api/pokemon.js";
import Form from 'react-bootstrap/Form';
import "../../style.css";

//Formulaire qui permet d'ajouter des pokemons dans la collection pokemon
export const App = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    addToPokemon(data);
  }

  return (
    <form className='formInsert' onSubmit={handleSubmit(onSubmit)}>
      <input {...register("numero")} placeholder="Numero" />
      <input {...register("name")} placeholder="Name" />
      <input {...register("img")} placeholder="Image" />
      <div className="formInsert">
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
        <Form.Select {...register("type2", { required: true })} aria-label="Default select example">
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



