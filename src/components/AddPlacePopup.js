import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({   
                        isOpen, 
                        onClose, 
                        onAddPlace 
                        }) 
    {

    const link = useRef('');
    const name = useRef('');

    function handleSubmit(e) {
        e.preventDefault();
      
        onAddPlace({
          link: link.current.value,
          name: name.current.value
        });
      } 

    return (
        <PopupWithForm 
            name='place' 
            title='Новое место' 
            children={
                <>
                    <input ref={name} name="name" id="image-input" type="text" minLength="1" maxLength="40" className="popup-form__text-input" placeholder="Название" required />
                    <span id="image-input-error" className="popup-form__error-text"></span>
                    <input ref={link} name="link" id="link-input" type="url" className="popup-form__text-input" placeholder="Ссылка на картинку" required />
                    <span id="link-input-error" className="popup-form__error-text"></span>
                </>
            }
            isOpen={isOpen}
            onClose={onClose}
            buttonText='Создать'
            onSubmit={handleSubmit}
    />
    );
}    

export default AddPlacePopup;