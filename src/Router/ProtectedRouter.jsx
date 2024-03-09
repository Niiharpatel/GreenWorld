import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

function ProtectedRouter({ component }) {
  let user = useSelector((state) => {
    return state.user.status;
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/alert");
    }
  }, []);
  return <>{component}</>;
}

export default ProtectedRouter;
