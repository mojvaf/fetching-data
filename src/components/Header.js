import React, { useState } from "react";

const Header = props => {
  const [showAge, setShowAge] = useState(true);

  return (
    <div className="contact-card">
      <img src={props.avatarUrl}></img>
      <div>
        <p>city:{props.city} </p>
        <p>email:{props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Age:</button>
        {showAge ? <p>Age: {props.age}</p> : null}
      </div>
    </div>
  );
};
export default Header;
