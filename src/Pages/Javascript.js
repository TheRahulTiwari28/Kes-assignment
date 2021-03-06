import React from 'react'
import JData from '../Data/JData';
import Cards from '../components/cards/CardBox';

const Javascript = () => {
    return (
        <>
        <section class="home-section">
            <div class="text">JavaScript</div>
            <div className="card">
                {JData.map((value) => {
                    return(
                        <Cards
                            img={value.img}
                            heading={value.heading}
                            authImg={value.authImg}
                            authName={value.authName}
                            authLink={value.authLink}
                        />
                    )
                })}
            </div>
        </section>
        </>
    )
}

export default Javascript
