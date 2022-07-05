import {useContext} from 'react';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Main({
                onEditProfile,
                onEditAvatar,
                onAddPlace,
                onCard,
                cards,
                onCardLike,
                onCardDelete
              }) {
  const currentUser = useContext(CurrentUserContext);
  const {avatar, name, about} = currentUser;

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <button type="button" aria-label="Редактировать аватар" className="profile__button-avatar"
                  onClick={onEditAvatar}>
            <img src={avatar} style={{backgroundImage: `url(${avatar})`}} alt="Аватар"
                 className="profile__avatar"/>
          </button>
          <div className="profile__info-container">
            <h1 className="profile__name">{name}</h1>
            <p className="profile__job">{about}</p>
            <button type="button" aria-label="Редактировать профиль" className="profile__button-edit"
                    onClick={onEditProfile}></button>
          </div>
        </div>
        <button type="button" aria-label="Добавить" className="profile__button-add" onClick={onAddPlace}></button>
      </section>

      <section className="grid">
        {cards.map((item) => (
          <Card
            onCardClick={onCard}
            cardProps={item}
            key={item._id}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>

    </main>
  )
}

export default Main;