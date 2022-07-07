import {useContext} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({
                onCardClick,
                cardProps,
                onCardLike,
                onCardDelete
              }) {

  const currentUser = useContext(CurrentUserContext)

  function handleClick() {
    onCardClick(cardProps);
  }

  function handleLikeClick() {
    onCardLike(cardProps);
  }

  function handleDeleteClick() {
    onCardDelete(cardProps);
  }

  const isOwn = cardProps.owner === currentUser._id;

  const cardDeleteButtonClassName = (
    `${isOwn ? 'grid__delete-element' : 'grid__delete-element_hidden'}`
  );

  const isLiked = cardProps.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `${isLiked && 'grid__like-button_active'}`
  );

  return (
    <div className="grid__element">
      <img onClick={handleClick} src={cardProps.link} alt={cardProps.name} className="grid__element-photo"/>
      <div className="grid__container">
        <h2 className="grid__element-header">{cardProps.name}</h2>
        <div className="grid__like-container">
          <button type="button" aria-label="Мне нравится"
                  className={`${cardLikeButtonClassName} grid__like-button`} onClick={handleLikeClick}></button>
          <p className="grid__like-count">{cardProps.likes.length}</p>
        </div>
      </div>
      <button type="button" aria-label="Удалить"
              className={`${cardDeleteButtonClassName}`} onClick={handleDeleteClick}></button>
    </div>
  )

}

export default Card