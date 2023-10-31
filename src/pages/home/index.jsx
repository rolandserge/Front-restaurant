import React from 'react';
import "../../styles/Home.css"
import Banner from '../../components/Header';
import Acceuil from '../../components/Acceuil';
import Titre from '../../components/Titre';
import Cards from '../../components/Cards';
import Cuisinier from '../../components/Cuisinier';
import Plat from '../../components/Plat';
import Temoignage from '../../components/Temoignage';
import Cuisiniere from '../../components/Cuisiniere';
import Reservation from '../../components/Reservation';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

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
