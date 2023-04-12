import editIconPath from '../images/edit-img.svg';
import addIconPath from '../images/add-img.svg';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInfoAboutMe()
      .then((aboutMeData) => {
        setUserName(aboutMeData.name);
        setUserDescription(aboutMeData.about);
        setUserAvatar(aboutMeData.avatar);
      })
      .catch(err => console.log(err));
    }, []);
  useEffect(() => {
    api.getInitialCards()
      .then((cardsData) => {
        setCards(cardsData);
        
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <main className="main">
      <section className="profile page__profile">
        <button onClick={props.onEditAvatar} className="avatar-btn" type="button">
          <img src={userAvatar} alt="аватарка профиля" className="profile__img avatar" />
        </button >
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">
              {userName}
            </h1>
            <p className="profile__job">
              {userDescription}
            </p>
          </div>
          <button onClick={props.onEditProfile} className="profile__btn profile__btn_type_edit" type="button">
            <img src={editIconPath} alt="кнопка редактирования" className="profile__edit-img" />
          </button>
        </div>
        <button onClick={props.onAddPlace} className="profile__btn profile__btn_type_add" type="button">
          <img src={addIconPath} alt="кнопка добавления публикации" className="profile__add-img" />
        </button>
      </section>
      <section className="cards page__cards" aria-label="секция с карточками-постами">
        {/* [...cards] чтобы не менять стэйт cards напрямую (т.к. map меняет изначальный массив, а спрэд оператор вроде бы делает копию массива) */}
        {[...cards].map((item) => {  
         return (
            <Card onCardClick={props.onCardClick} key={item._id} card={item}/>
          );
        })}
      </section>
    </main>
  );
};
export default Main;