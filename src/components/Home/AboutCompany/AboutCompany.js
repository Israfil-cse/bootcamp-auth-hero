import React from 'react';
import aboutImage from '../../../images/aboutImage.jpg';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faCity, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const AboutCompany = () => {
    const props = useSpring({ number: 15, from: { number: 0 } });
    const propsTwo = useSpring({ number: 20, from: { number: 0 } });
    const propsThree = useSpring({ number: 10, from: { number: 0 } });

    return (
        <section className="my-5 container">
            <div className="row">
                <div className="col-md-5 mb-3">
                    <img className="img-fluid" src={aboutImage} alt="" />
                </div>
                <div className="col-md-6 mb-2">
                    <h4>About Company</h4>
                    <h3 className="fw-bolder w-50">You start the engine and your adventure begins</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quis aliquam assumenda possimus ea ipsum rerum et laudantium exercitationem voluptatem incidunt est cumque dolor commodi culpa delectus eaque ut sequi placeat, atque tempora omnis neque quod. Sequi earum odio eius quisquam voluptate architecto non dolores, corrupti hic vero repudiandae.</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="overflow-hidden w-25">
                            <h6>Car Types</h6>
                            <FontAwesomeIcon icon={faCarSide} style={{ fontSize: '4em',color:'red' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{props.number}</animated.span>
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Rental Outlets</h6>
                            <FontAwesomeIcon icon={faCity} style={{ fontSize: '4em',color:'red' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{propsTwo.number}</animated.span>
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Repair Shops</h6>
                            <FontAwesomeIcon icon={faWarehouse} style={{ fontSize: '4em',color:'red' }}></FontAwesomeIcon>
                            <animated.span style={{ fontSize: '4em' }}>{propsThree.number}</animated.span>
                        </div>  
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutCompany;