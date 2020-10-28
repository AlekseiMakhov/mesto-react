import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    const [cards, setCards] = React.useState(undefined);

    React.useEffect(() => {
        Promise.all([     
            api.getProfileInfo(),
            api.getInitialCards()
        ])
            .then((values) => {    
                const [userInfo, cardsList] = values;
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
                setCards(cardsList);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])   //добавляем пустой массив вторым аргументом для монтирования

    return (
        <main className="content">
            <section className="profile">
                <div className="avatar" onClick={props.onEditAvatar}>
                    <img className="avatar__img" src={userAvatar} alt="Аватар" />
                    <div className="avatar__edit-icon"></div>
                </div>
                <div className="profile-info">
                    <div>
                        <h1 className="profile-info__name">{userName}</h1>
                        <p className="profile-info__description">{userDescription}</p>
                    </div>
                    <button type="button" className="profile-info__edit-button" onClick={props.onEditProfile}></button>
                </div>
                <button type="button" className="add-image-button" onClick={props.onAddPlace}></button>
            </section>
            
            <section className="elements">
                
                {cards && cards.map((card) => {
                    return(
                        <Card key={card._id} item={card} onCardClick={props.onCardClick}/>   //прокидываем колбэк в карточку
                    )
                })}

            </section>

        </main>
    );
}

export default Main;