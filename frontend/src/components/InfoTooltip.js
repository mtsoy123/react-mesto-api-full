import React from 'react';
import success from '../images/success.svg';
import error from '../images/error.svg';

function InfoTooltip({onClose, isOpen, status}) {

  let caption;
  let source;

  if (status === 'success') {
    caption = 'Вы успешно зарегистрировались!'
    source = success;
  } else if (status === 'error') {
    caption = `Что-то пошло не так!\nПопробуйте ещё раз.`
    source = error;
  }

  return (
    <div className={`pop-up ${isOpen && 'pop-up_opened'}`}>
      <div className="pop-up__container pop-up__container_type_info">
        <img
          src={source}
          alt={source} className="pop-up__image pop-up__image_type_info"/>
        <h2 className="pop-up__title pop-up__title_type_info">{caption}</h2>
        <button type="button" aria-label="Закрыть"
                className="pop-up__button-close" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default InfoTooltip;