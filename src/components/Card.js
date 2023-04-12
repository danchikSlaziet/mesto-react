function Card(props) {
  function handleClick() {
    props.onCardClick(props.card.link, props.card.name);
  };
  return (
    <div className="card">
      <img src={props.card.link} alt="" className="card__image" onClick={handleClick}/>
      <div className="card__sub-info">
        <h2 className="card__title">
          {props.card.name}
        </h2>
        <div className="cards__likes-wrapper">
          <button className="card__btn-like" type="button">
          </button>
          <p className="card__like-counter">
            {props.card.likes.length}
          </p>
        </div >
        <button className="card__delete" type="button">
        </button>
      </div>
    </div>
  );
};
export default Card;