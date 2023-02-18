import React from "react";
// query
// import { useSearchParams } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  // query
  //   const [searchParams, setSearchParmas] = useSearchParams();
  const params = useParams();
  console.log(params.id);
  //   console.log(searchParams.get("id"));
  const navigate = useNavigate();
  return (
    <div>
      Detail
      <button
        onClick={() => {
          navigate("/detail/1000");
          // query
          //   setSearchParmas({ id: 1000 });
        }}
      >
        猜你喜欢
      </button>
    </div>
  );
}
