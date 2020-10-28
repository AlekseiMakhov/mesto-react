function PopupWithForm(props) {
    const openedPopupModifier = (props.isOpen) ? ' popup_opened' : '';

    return (
        <>
            <section id="profile-info__edit" className={`popup popup_type_${props.name}${openedPopupModifier}`}>
                <form className="popup-form" name={props.name}>
                    <button type="button" name="Закрыть" className="popup-form__close-button" onClick={props.onClose}></button>
                    <h3 className="popup-form__title">{props.title}</h3>
                    {props.children}
                    <button name="Сохранить" className="popup-form__submit-button popup-form__submit-button_disabled" disabled>Сохранить</button>
                </form>
            </section>            
        </>
    );
}

export default PopupWithForm;