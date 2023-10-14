import { useNavigate } from "react-router-dom";

export const useRefreshRoute = () => {
    const navigate = useNavigate();
    return () => {
        navigate("", { replace: true });
    };
};
