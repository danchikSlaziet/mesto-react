import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({isOpen: false, link: '', place: ''});

  function handleCardClick(url, name) {
    setSelectedCard({isOpen: true, link: url, place: name});
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  };
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  };
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({isOpen: false, link: '', place: ''});
  }

  return (
    <div>
      <Header />
      <Main onCardClick={handleCardClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEditProfileClick}/>
      <Footer />
      <PopupWithForm buttonText='Сохранить' onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} title="Редактировать профиль" name="profile">
        <input required minLength="2" maxLength="40" id="name-input" type="text" className="form__input form__input_type_name" name="name" />
        <span className="form__input-error name-input-error"></span>
        <input required minLength="2" maxLength="200" id="job-input" type="text" className="form__input form__input_type_job" name="job" />
        <span className="form__input-error job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm buttonText='Создать' onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} title="Новое место" name="publication">
        <input required minLength="2" maxLength="30" id="place-input" type="text" className="form__input form__input_type_place" name="place" placeholder="Название" />
        <span className="form__input-error place-input-error"></span>
        <input required id="url-input" type="url" className="form__input form__input_type_url" name="url" placeholder="Ссылка на картинку" />
        <span className="form__input-error url-input-error"></span>
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
      <PopupWithForm buttonText='Да' title="Вы уверены?" name="delete">
      </PopupWithForm>
      <PopupWithForm buttonText='Сохранить' onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} title="Обновить аватар" name="avatar">
        <input required id="avatar-url-input" type="url" className="form__input form__input_type_url" name="avatar-url" placeholder="Ссылка на картинку" />
        <span className="form__input-error avatar-url-input-error"></span>
      </PopupWithForm>
    </div>
  )
};

export default App;
