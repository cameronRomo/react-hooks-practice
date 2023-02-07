import React, { useContext } from "react";
import UserContext from "./userContext";

function MovieRow(props) {
  const userContext = useContext(UserContext);

  return (
    <div>
      Movie Row{" "}
      {userContext.currentUser.name ? userContext.currentUser.name : ""}
    </div>
  );
}

export default MovieRow;
