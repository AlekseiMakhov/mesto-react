function PopupWithForm({ 
                            name, 
                            title, 
                            children,
                            isOpen,
                            onClose,
                            buttonText,
                            onSubmit 
                        }) 
{
    const isOpenClassName = (isOpen) ? ' popup_opened' : '';

    return (
        <>
            <section id="profile-info__edit" className={`popup popup_type_${name}${isOpenClassName}`}>
                <form className="popup-form" name={name} onSubmit={onSubmit}>
                    <button type="button" name="Закрыть" className="popup-form__close-button" onClick={onClose}></button>
                    <h3 className="popup-form__title">{title}</h3>
                    {children}
                    <button className="popup-form__submit-button">{buttonText}</button>
                </form>
            </section>            
        </>
    );
}

export default PopupWithForm;