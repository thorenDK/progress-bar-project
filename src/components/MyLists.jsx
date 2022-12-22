import React, { useState, useEffect } from 'react';

export default function AllLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('/myLists/my')
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
      });
  }, []);

  return (
    <>
      <div />
      {lists?.map((el) => (
        <div key={el.id} className="card" style={{ width: '18rem' }}>
          <img src={el.name} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{el.progress}</h5>
          </div>
        </div>
      ))}
    </>
  );
}
