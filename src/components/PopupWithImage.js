import cn from 'classnames';

function PopupWithImage({ 
                        isOpen,
                        onClose,
                        cardData,
                        noClose
                        }) 
    {

    return (
        <section id="view-image" className={cn('popup popup_type_dark', {'popup_opened' : isOpen})} onClick={onClose}>
            <div className="popup-image" onClick={noClose}>
                <button type="button" name="Закрыть" className="popup-image__close-button" onClick={onClose}></button>
                <img className="popup-image__image" src={cardData.link} alt={`${cardData.name}`.Фото} />
                <h3 className="popup-image__title">{cardData.name}</h3>
            </div>
        </section>
    );
}

export default PopupWithImage;