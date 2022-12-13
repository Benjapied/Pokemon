import { useForm } from "react-hook-form";

//Form qui cherche un pokemon en fonction de son numero de pokedex
export const FormType = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        window.location.href = "http://localhost:3000?type=" + data.type;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("type", { required: true })}>
                <option value="None">Un seul type</option>
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