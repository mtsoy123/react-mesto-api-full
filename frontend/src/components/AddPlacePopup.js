import PopupWithForm from './PopupWithForm';
import {useEffect, useState} from 'react';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [place, setPlace] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setPlace('');
    setLink('');
  }, [isOpen]);

  function handlePlaceChange(e) {
    setPlace(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleAddPlaceSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: place,
      link
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Новое место"
      name="add-place"
      onClose={onClose}
      buttonLabel="Создать"
      onSubmit={handleAddPlaceSubmit}
    >
      <label htmlFor="pop-up__place-input" className="pop-up__label">
        <input id="pop-up__place-input" type="text" name="add-place" placeholder="Название"
               className="pop-up__input pop-up__input_type_place" minLength="2" maxLength="30" required
               onChange={handlePlaceChange} value={place}/>
        <span className="pop-up__place-input-error pop-up__error-message"></span>
      </label>
      <label htmlFor="pop-up__link-input" className="pop-up__label">
        <input id="pop-up__link-input" type="url" name="add-link" placeholder="Ссылка на картинку"
               className="pop-up__input pop-up__input_type_link" required onChange={handleLinkChange} value={link}/>
        <span className="pop-up__link-input-error pop-up__error-message"></span>
      </label>
    </PopupWithForm>
  )
}

export default AddPlacePopup