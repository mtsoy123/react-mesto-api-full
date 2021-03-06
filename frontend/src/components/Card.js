import {useContext, useEffect, useState} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({
                onCardClick,
                cardProps,
                onCardLike,
                onCardDelete
              }) {

  const currentUser = useContext(CurrentUserContext)

  const isOwn = cardProps.owner === currentUser._id;
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked (cardProps.likes.some(i => (i === currentUser._id)))
  }, [cardProps])

  function handleClick() {
    onCardClick(cardProps);
  }

  function handleLikeClick() {
    onCardLike(cardProps);
  }

  function handleDeleteClick() {
    onCardDelete(cardProps);
  }

  const cardDeleteButtonClassName = (
    `${isOwn ? 'grid__delete-element' : 'grid__delete-element_hidden'}`
  );

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