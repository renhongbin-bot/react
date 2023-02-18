import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
export default function WithRouter(Component) {
  const useCallback = (props) => {
    const push = useNavigate();
    const match = useParams()
    const location = useSearchParams()
    return <Component filmId={props.filmId} history={{ push, match, location }} />;
  };
  return useCallback
}
