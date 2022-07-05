import PopupWithForm from './PopupWithForm';
import {useEffect, useRef} from 'react';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = ''
  }, [isOpen])

  function handleSubmit(event) {
    event.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      title="Обновить аватар"
      name="edit-avatar"
      onClose={onClose}
      buttonLabel="Сохранить"
      onSubmit={handleSubmit}
    >
      <label htmlFor="pop-up__name-input" className="pop-up__label">
        <input ref={avatarRef} id="pop-up__avatar-input" type="url" name="edit-avatar" required
               className="pop-up__input pop-up__input_type_avatar" placeholder="Ссылка на аватар"/>
        <span className="pop-up__avatar-input-error pop-up__error-message"></span>
      </label>
    </PopupWithForm>
  )
}

export default EditAvatarPopup