import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import "../../style.css";

//Form qui cherche un pokemon en fonction de son numero de pokedex
export const FormType = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        window.location.href = "http://localhost:3000?type=" + data.type;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="formSelect">
                <Form.Select {...register("type", { required: true })} aria-label="Default select example" >
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
                <button type="submit">Valider</button>
            </div>
        </form>
    );
}