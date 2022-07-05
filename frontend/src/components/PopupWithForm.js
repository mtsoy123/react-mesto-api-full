function PopupWithForm({name, isOpen, onClose, title, children, buttonLabel, onSubmit}) {

  return (
    <div className={`pop-up pop-up_type_${name} ${isOpen && 'pop-up_opened'}`}>
      <div className={`pop-up__container pop-up_type_${name}`}>
        <h2 className="pop-up__title">{title}</h2>
        {/*// NB pop-up__form_type_profile используется в валидации*/}
        <form noValidate className={`pop-up__form pop-up_type_${name}`} name={name} onSubmit={onSubmit}>
          <button type="button" aria-label="Закрыть"
                  className="pop-up__button-close" onClick={onClose}></button>
          {children}
          <button type="submit" aria-label={buttonLabel} className="pop-up__button">{buttonLabel}</button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm;