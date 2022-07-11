import conectarDB from "../../lib/dbConnect";
import Movie from "../../lib/models/Movie";
import Link from "next/link";
import { useRouter } from "next/router";


const EditPersonPage = ({ success, error, movie }) => {
    const router = useRouter();
    if (!success) {
        return (
            <div className="container text-center my-5">
                <h1>{error} 🤦‍♂️</h1>
                <Link href="/">
                    <div className="btn btn-success">Volver...</div>
                </Link>
            </div>
        )
    }

    const deleteData = async (id) => {
        try {
            await fetch(`http://172.17.0.1:3008/query`, {
                method: 'POST'
            })
            router.push("/");
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className="container">
            <h1>Detalle de Movie</h1>
            <div className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h5 className="text-uppercase">{movie.title}</h5>
                    </div>
                    <p className="fw-light">{movie.plot}</p>
                    <Link href="/">
                        <div className="btn btn-success btn-sm me-2">Volver...</div>
                    </Link>
                    <Link href={`/${movie._id}/edit`}>
                        <div className="btn btn-warning btn-sm me-2">Editar</div>
                    </Link>
                    <button className="btn btn-danger btn-sm"
                        onClick={() => deleteData(movie._id)}>Eliminar</button>
                </div>
            </div>
        </div>
    );
};

export default EditPersonPage;

export async function getServerSideProps({ params }) {
    try {
        await conectarDB()
        const movie = await Movie.findById(params.id).lean();

        if (!movie) {
            return { props: { success: false, error: 'Pelicula no encontrada !' } };
        }
        movie._id = `${movie._id}`;
        console.log(movie)

        return { props: { success: true, movie } };
    } catch (error) {
        console.log(error);
        if (error.kind == 'ObjectId') {
            return { props: { success: false, error: 'Id no válido !' } };
        }
        return { props: { success: false, error: 'Error de servidor !' } };
    }
}