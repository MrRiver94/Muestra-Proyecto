import { Link } from "react-router-dom"

const NotFound = () => {
    return(
        <div>
            <h1>PAGE NOT FOUND </h1>
            <h2>ERROR 404</h2>
            <Link to="ProfileSection">Volver a la página principal</Link>
        </div>
    )
};

export default NotFound;