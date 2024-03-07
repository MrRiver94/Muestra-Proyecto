import PropTypes from 'prop-types'; // Importa PropTypes desde la biblioteca prop-types

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuthentificator";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const location = useLocation();

    return isAuthenticated ? children : <Navigate to="/perfil" state={location} />;
}

// Define la validación PropTypes para el prop "children"
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired // Valida que "children" sea un nodo de React y que sea requerido
};

export default ProtectedRoute;
