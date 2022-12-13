import { useForm } from "react-hook-form";

//Form qui cherche un pokemon en fonction de son numero de pokedex
export const FormChoose = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        window.location.href = "http://localhost:3000/admin?numero=" + data.numero;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("numero")} placeholder="Numero" />
            <button type="submit">Valider</button>
        </form>
    );
}