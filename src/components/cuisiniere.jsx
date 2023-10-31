import React from 'react';
import "../styles/Cuisiniere.css"
import Fb from "../assets/Fbook.png"
import Email from "../assets/E-mail.png"
import Twitter from "../assets/twt.png"
import Insta from "../assets/Insta.png"
import Cuisiniere1 from "../assets/cuisiniere2.jpg"
import Cuisiniere2 from "../assets/cuisiniere3.jpg"
import Cuisiniere3 from "../assets/cuisiniere4.jpg"
import Cuisiniere4 from "../assets/cuisiniere5.jpg"

const Cuisiniere = () => {
    return (
        <div className='container_cuisiniere'>
            <div className='cuisiniere_titre'>
                <h2>Rencontrez Nos Chefs Exclusifs & Maîtres</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloribus.
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className='cuisiniere_cards'>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere1} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Pierre N'gadeau</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="le logo de facebook" />
                                <img src={Insta} alt="le logo d'instagram" />
                                <img src={Email} alt="le logo de gmail" />
                                <img src={Twitter} alt="le logo de twitter" />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere2} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Chien vert 😂</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="" />
                                <img src={Insta} alt="" />
                                <img src={Email} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere3} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Audrey la folle</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="" />
                                <img src={Insta} alt="" />
                                <img src={Email} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere4} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Vanessa de yopougon</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="" />
                                <img src={Insta} alt="" />
                                <img src={Email} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cuisiniere;
