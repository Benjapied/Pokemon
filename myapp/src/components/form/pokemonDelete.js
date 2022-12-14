import { useForm } from "react-hook-form";
import { addToPokemon } from "../../api/pokemon.js";

export const DeleteForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        addToPokemon(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("numero")} placeholder="Numero" />
            <button type="submit">Valider</button>
        </form>
    );
}