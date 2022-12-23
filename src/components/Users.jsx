import React, { useState } from 'react';
import User from './User';

export default function AllUsers({ allUsers }) {
  const [allEntries, setAllEntries] = useState(allUsers);
  // console.log(allUsers);

  const onDelete = async (id) => {
    const response = await fetch('/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    const status = await response.json();
    if (status === 'OK') {
      setAllEntries(allEntries.filter((el) => el.id !== id));
    }
  };
  console.log(allEntries);
  return (
    <div className="container">
      <div>Все сотрудники</div>
      <ul className="list-group">
        {allEntries?.length ? allEntries.map((el) => <User onDelete={onDelete} oneUser={el} key={el.id} />) : 'Пока нет пользователей в БД'}
      </ul>
    </div>
  );
}
