import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    // Fetch user data and check if they have paid
    fetch("http://localhost:5000/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success" && data.data.isPaid) {
          setIsPaid(true);
        } else if (location.pathname !== "/") {
          navigate("/payments");
        }
      });
  }, [location, navigate]);
  return (
    <>

      {isPaid ? (
        <>
          <h1>ty</h1>
          <p>
            You have successfully paid for the product and have access to the
            content.
          </p>
        </>
      ) : (
        <div className="Loading">Loading...</div>
      )}
    </>
  );
};

export default SuccessPage;