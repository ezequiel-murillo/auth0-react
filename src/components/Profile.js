import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const token = await getAccessTokenSilently();  

        // Send a GET request to the server and add the signed in user's
        // access token in the Authorization header
        const response = await fetch("http://localhost:8080/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const responseData = await response.json();

        setProducts(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);
  
  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>From Go API</h3>
        <div>
          {products.map(function (product, index) {
              return (<li key={index}>{product.Name}</li>);
          })}
        </div>

      </div>
    )
  );
};

export default Profile;