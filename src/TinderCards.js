import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import _database from './firebase'
import "./TinderCards.css"



const TinderCards = () => {
    const [people, setPeople] = useState([
        /*
        {
            name: 'steve jobs',
            url: 'https://www.garentapro.com/blog/wp-content/uploads/fly-images/2289/steve-jobs-1000x.jpg'
        },
        {
            name: 'mark zuckerberg',
            url: 'https://media-cdn.t24.com.tr/media/library/2020/07/1595252032092-zuckerberg.jpg'
        }
        */

    ]);

    useEffect(() => {
        //kod her render olduğunda çalışır [] kullanmazsam...
        // [] kullanıp ve boş bırakırsam sadece ilk yüklemede çalışır..
        // [people] içini doldurursam, sadece içine yazdığım değişken değiştiğinde çalışır.

        _database.collection('people').onSnapshot(snopshot => (
            setPeople(snopshot.docs.map(doc => doc.data()))
        ))

    }, [])

    //In React, we use this function when pushing an item to array.
    //setPeople([...people, 'ahmet', 'elif'])

    return (
        <div>
            <h1>Tinder Cards</h1>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                )
                )}


            </div>
        </div>
    )
}

export default TinderCards
