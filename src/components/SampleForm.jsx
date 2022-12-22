import React, { useState } from 'react';

export default function SampleForm({ workername, hrname }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="sample">
      <div className="">
        <strong>
          Привет, {workername} ! И добро пожаловать в команду Высокогорья!
          Впереди нас ждет интересное путешествие в мир нашей компании, и самым
          главным проводником будет- {hrname}
        </strong>
        <strong>
          Мы подготовили для тебя чек-лист на первый день. Процесс выполнения
          будет сохраняться, поэтому ты можешь закрывать пункты в удобном для
          тебя порядке.
        </strong>
        <div className="sample__form1">
          <h2>Нужно подготовить твое рабочее место:</h2>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Наставник выдал мне пропуск
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Наставник сообщил пароль от Wi-Fi
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Системный администратор выдал мне ноутбук
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Системный администратор выдал мне доступы к почте
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя
            канцелярии
          </div>
        </div>
        <div className="sample__form2">
          <h2>Важно познакомиться с коллегами:</h2>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Ты познакомился (-ась) со своим руководителем
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Ты написал(-а) сообщение в командный чат
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Напиши имена трех твоих коллег по отделу:
          </div>
        </div>
        <div className="sample__form3">
          <h2>Важно пройти оформление в отделе кадров:</h2>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Ты отправил (-а) сканы документов на оформление в отдел кадров
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Ты подписал (-а) соглашение о коммерческой тайне
          </div>
        </div>
        <div className="sample__form4">
          <h2>А теперь самое время работать:</h2>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Получи свою первую задачу у руководителя
          </div>
          <div>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            Создай подпись в почте по корпоративному шаблону
          </div>
        </div>
      </div>
      <strong>Классного путешествия! Команда Высокой горы 💚 </strong>
    </div>
  );
}
