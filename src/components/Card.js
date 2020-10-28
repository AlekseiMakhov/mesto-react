function Card(props) {

    function handleCardClick() {
        props.onCardClick(props.item)
    }
    
    return (
        <>
            <div className="element" id={props.item.id}>
                <img className="element__image" src={props.item.link} alt={`${props.item.name}.Фото`} onClick={handleCardClick} />
                <button type="button" className="element__trash-button element__trash-button_visible"></button>
                <h3 className="element__text">{props.item.name}</h3>
                <div className="like">
                    <button type="button" className="like__button"></button>
                    <p className="like__count">{props.item.likes.length}</p>
                </div>
            </div>

        </>
    );
}

export default Card;