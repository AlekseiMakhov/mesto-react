function PopupWithImage({ 
                        isOpen,
                        onClose,
                        cardData
                        }) 
    {
    const isOpenClassName = (isOpen) ? 'popup_opened' : '';
    return (
        <section id="view-image" className={`popup popup_type_dark ${isOpenClassName}`}>
            <div className="popup-image">
                <button type="button" name="Закрыть" className="popup-image__close-button" onClick={onClose}></button>
                <img className="popup-image__image" src={cardData.link} alt={`${cardData.name}`.Фото} />
                <h3 className="popup-image__title">{cardData.name}</h3>
            </div>
        </section>
    );
}

export default PopupWithImage;