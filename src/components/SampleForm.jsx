import React, { useState } from 'react';

export default function SampleForm({ list }) {
  const [oneList, setOneList] = useState(list);

  const submitHandler = async (e) => {
    // e.preventDefault();
    const response = await fetch('/sample', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.ok) {
      window.location = `/sample?id=${oneList?.id}`;
    }
  };

  return (
    <div
      className="sample"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={submitHandler}>
        <div className="sample__form" style={{ maxWidth: '500px' }}>
          <p>
            Привет,
            {' '}
            {oneList?.name}
            !
          </p>
          <p>И добро пожаловать в команду Высокогорья!</p>
          <p>
            Впереди нас ждет интересное путешествие в мир нашей компании, и
            самым главным проводником будет -
            {' '}
            {oneList?.hr_id}
          </p>
          <p>
            Мы подготовили для тебя чек-лист на первый день. Процесс выполнения
            будет сохраняться, поэтому ты можешь закрывать пункты в удобном для
            тебя порядке.
          </p>
          <div className="sample__form1">
            <p>
              <b>Нужно подготовить твое рабочее место:</b>
            </p>
            <div>
              <input
                name="one"
                id="input"
                type="checkbox"
                defaultChecked={oneList?.one}
                // onChange={submitHandler}
              />
              Наставник выдал мне пропуск
            </div>
            <div>
              <input
                name="two"
                type="checkbox"
                defaultChecked={oneList?.two}
                // onChange={submitHandler}
              />
              Наставник сообщил пароль от Wi-Fi
            </div>
            <div>
              <input
                name="three"
                type="checkbox"
                defaultChecked={oneList?.three}
                // onChange={submitHandler}
              />
              Системный администратор выдал мне ноутбук
            </div>
            <div>
              <input
                name="four"
                type="checkbox"
                defaultChecked={oneList?.four}
                // onChange={submitHandler}
              />
              Системный администратор выдал мне доступы к почте
            </div>
            <div>
              <input
                name="five"
                type="checkbox"
                defaultChecked={oneList?.five}
                // onChange={submitHandler}
              />
              Ты отправил(-а) офис-менеджеру на почту список необходимой для
              тебя канцелярии
            </div>
          </div>
          <div className="sample__form2 mt-2">
            <p>
              <b>Важно познакомиться с коллегами:</b>
            </p>
            <div>
              <input
                name="six"
                type="checkbox"
                defaultChecked={oneList?.six}
                // onChange={submitHandler}
              />
              Ты познакомился (-ась) со своим руководителем
            </div>
            <div>
              <input
                name="seven"
                type="checkbox"
                defaultChecked={oneList?.seven}
                // onChange={submitHandler}
              />
              Ты написал(-а) сообщение в командный чат
            </div>
            <div>
              <input
                name="eight"
                type="checkbox"
                defaultChecked={oneList?.eight}
                // onChange={submitHandler}
              />
              Знаешь трех твоих коллег по отделу:
            </div>
          </div>
          <div className="sample__form3 mt-2">
            <p>
              <b>Важно пройти оформление в отделе кадров:</b>
            </p>
            <div>
              <input
                name="nine"
                type="checkbox"
                defaultChecked={oneList?.nine}
                // onChange={submitHandler}
              />
              Ты отправил (-а) сканы документов на оформление в отдел кадров
            </div>
            <div>
              <input
                name="ten"
                type="checkbox"
                defaultChecked={oneList?.ten}
                // onChange={submitHandler}
              />
              Ты подписал (-а) соглашение о коммерческой тайне
            </div>
          </div>
          <div className="sample__form4 mt-2">
            <p>
              <b>А теперь самое время работать:</b>
            </p>
            <div>
              <input
                name="eleven"
                type="checkbox"
                defaultChecked={oneList?.eleven}
                // onChange={submitHandler}
              />
              Получи свою первую задачу у руководителя
            </div>
            <div>
              <input
                name="twelve"
                type="checkbox"
                defaultChecked={oneList?.twelve}
                // onChange={submitHandler}
              />
              Создай подпись в почте по корпоративному шаблону
            </div>
          </div>
          <p>Классного путешествия! Команда Высокой горы 💚</p>
          <button type="submit" className="form__button">Подтвердить</button>
        </div>
      </form>
    </div>
  );
}
