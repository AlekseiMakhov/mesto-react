function PopupWithImage(props) {
    const isOpen = (props.isOpen) ? ' popup_opened' : '';
    return (
        <section id="view-image" className={`popup popup_type_dark popup_type_${props.name}${isOpen}`}>
            <div className="popup-image">
                <button type="button" name="Закрыть" className="popup-image__close-button" onClick={props.onClose}></button>
                <img className="popup-image__image" src={props.cardData.link} alt={`${props.cardData.name}`.Фото} />
                <h3 className="popup-image__title">{props.cardData.name}</h3>
            </div>
        </section>
    );
}

export default PopupWithImage;