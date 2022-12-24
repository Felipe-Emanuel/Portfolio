import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingAnimation } from "../../animations/Loading/LoadingAnimation";

export function PrivateLoading() {
  const navigate = useNavigate();

  useEffect(() => {
    {setTimeout(() => {
        navigate("/architecturepage", {replace: true});
    }, 7700)}
    return clearTimeout()
  }, [])

    return(
        <div id="projetos" className="cursor-none inset-0 absolute bg-colorLoading">
            <LoadingAnimation />
        </div>
    )
}