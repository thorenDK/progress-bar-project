import React, { useState, useEffect } from 'react';

export default function AllLists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('/allLists/all')
      .then((res) => res.json())
      .then((data) => {
        setLists(data);
      });
  }, []);

  return (
    <>
      <div className="form">
        <h1 className="form__title">Все листки адаптации</h1>
      </div>
      <div />
      {lists?.map((el) => (
        <div
          key={el.id}
          style={{
            width: '200px', display: 'flex', columnGap: '8px', justifyContent: 'center', padding: '10px', border: '1px solid black', borderRadius: '15px',
          }}
        >
          <p className="card-title">{el.name}</p>
          <p className="card-title">
            {el.progress || 0}
            %
          </p>
        </div>
      ))}
    </>
  );
}
