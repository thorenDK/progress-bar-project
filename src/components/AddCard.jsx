// import React from 'react';

// export default function AddCard() {
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     // console.log(e.target.value);
//     const response = await fetch('/users/addcard', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
//     });
//     if (response.ok) {
//       window.location.href = `/samle/${response.id}`;
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={(e) => submitHandler(e)}>
//         <input type="text" name="worker" placeholder="введите имя сотрудника" />
//         <input type="text" name="hr" placeholder="введите имя наставника" />
//         <button type="submit">добавить</button>
//       </form>
//     </div>
//   );
// }
