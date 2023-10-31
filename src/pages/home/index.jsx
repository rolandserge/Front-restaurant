import React from 'react';
import "../../styles/Home.css"
import Banner from "../../components/header.jsx";
import Acceuil from '../../components/acceuil.jsx';
import Titre from '../../components/titre.jsx';
import Cards from '../../components/cards.jsx';
import Cuisinier from '../../components/cuisinier.jsx';
import Plat from '../../components/plat.jsx';
import Temoignage from '../../components/temoignage.jsx';
import Cuisiniere from '../../components/cuisiniere.jsx';
import Reservation from '../../components/reservation.jsx';
import Contact from '../../components/contact.jsx';
import Footer from '../../components/footer.jsx';

const Home = () => {
    return (
        <div>
            <header>
                <div>
                    <Banner />
                </div>
                <div>
                    <Acceuil />
                </div>
            </header>
            <main>
                <section>
                    <Titre />
                    <Cards />
                </section>
                <section>
                    <Cuisinier />
                </section>
                <section>
                    <Plat />
                </section>
                <section>
                    <Temoignage />
                </section>
                <section>
                    <Cuisiniere />
                </section>
                <section>
                    <Reservation />
                </section>
                <section>
                    <Contact />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
