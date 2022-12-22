import React, { useEffect, useState } from 'react';

export default function SampleForm({ workername, hrname }) {
  return (
    <div
      className="sample"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form>
        <div className="sample__form" style={{ maxWidth: '500px' }}>
          <p>
            Привет,
            {' '}
            {workername}
            !
          </p>
          <p>И добро пожаловать в команду Высокогорья!</p>
          <p>
            Впереди нас ждет интересное путешествие в мир нашей компании, и
            самым главным проводником будет -
            {' '}
            {hrname}
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
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Наставник выдал мне пропуск
            </div>
            <div>
              <input
                name="two"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Наставник сообщил пароль от Wi-Fi
            </div>
            <div>
              <input
                name="three"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Системный администратор выдал мне ноутбук
            </div>
            <div>
              <input
                name="four"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Системный администратор выдал мне доступы к почте
            </div>
            <div>
              <input
                name="five"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Ты отправил(-а) офис-менеджеру на почту список необходимой для
              тебя канцелярии
            </div>
          </div>
          <div className="sample__form2">
            <p>
              <b>Важно познакомиться с коллегами:</b>
            </p>
            <div>
              <input
                name="six"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Ты познакомился (-ась) со своим руководителем
            </div>
            <div>
              <input
                name="seven"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Ты написал(-а) сообщение в командный чат
            </div>
            <div>
              <input
                name="eight"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Напиши имена трех твоих коллег по отделу:
              {' '}
              <input type="text" />
            </div>
          </div>
          <div className="sample__form3">
            <p>
              <b>Важно пройти оформление в отделе кадров:</b>
            </p>
            <div>
              <input
                name="nine"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Ты отправил (-а) сканы документов на оформление в отдел кадров
            </div>
            <div>
              <input
                name="ten"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Ты подписал (-а) соглашение о коммерческой тайне
            </div>
          </div>
          <div className="sample__form4">
            <p>
              <b>А теперь самое время работать:</b>
            </p>
            <div>
              <input
                name="eleven"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Получи свою первую задачу у руководителя
            </div>
            <div>
              <input
                name="twelve"
                type="checkbox"
                defaultChecked={false}
                // onChange={submitHandler}
              />
              Создай подпись в почте по корпоративному шаблону
            </div>
          </div>
          <p>Классного путешествия! Команда Высокой горы 💚</p>
          <button type="submit">Подтвердить</button>
        </div>
      </form>
    </div>
  );
}
