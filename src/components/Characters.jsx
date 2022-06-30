import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <section className="row">
      {characters.map((item, index) => (
        <section key={index} className="col mb-4">
          <section className="card" style={{minWidth: "200px"}}>
            <img src={item.image} alt="" />
            <section className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <hr/>
                <p>species: {item.species}</p>
                <p>location: {item.location.name}</p>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Characters;
