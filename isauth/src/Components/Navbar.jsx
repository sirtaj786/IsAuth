import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Button, Heading } from "@chakra-ui/react";
const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  return (
    <div>
      <div className="nav">
        <Heading>IsAuth WebChecker</Heading>
        <div className="btndiv">
          <Button
            colorScheme={"teal"}
            onClick={() => {
              if (isAuth) {
                logout();
                console.log("User has Logout");
              } else {
                login("xyz", "xyz");
                console.log(
                  "User has login "
                );
              }
            }}
          >
            {isAuth ? "Logout" : "Login"}
          </Button>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;