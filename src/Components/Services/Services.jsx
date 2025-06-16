import React, { useState } from 'react'
import './Services.css'
import services from '../../Data/data'


const Services = () => {

    const [activeService, setActiveService] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    const loadMore = () => {
        setVisibleCount(services.length);
    }

    const loadLess = () => {
        setVisibleCount(6);
    }

    return (
        <div className="wrapper" id='services'>
            <div className="services">
                <h1>Our Services</h1>
                <h2>We help African professionals and SMEs unlock their potential through powerful <br /> CVs, strategic career coaching, and digital business solutions.</h2>
                <div className="services-container">
                    {services.slice(0, visibleCount).map((service) => (
                        <div className="service-item" key={service.id}>
                            <img src={service.image} alt={service.title} />
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button onClick={() => setActiveService(service)}>Explore</button>
                        </div>
                    ))}
                </div>

                {visibleCount < services.length ? (
                    <button className="load-more-btn" onClick={loadMore}>
                        More Services
                    </button>
                ) : (
                    <button className="load-more-btn" onClick={loadLess}>
                        View Less Services
                    </button>
                )}

                {activeService && (
                    <div className="popup-overlay">
                        <div className="popup-content">
                            <h2>{activeService.title}</h2>
                            <hr />
                            <div className='popup-container'>
                                <div className='popup-container-left'>
                                    <img src={activeService.image} alt={activeService.title} />
                                </div>
                                <div className='popup-container-right'>
                                    <h3>What's in this Service?</h3>
                                    <hr />
                                    <ul>
                                        {activeService.popupContent.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button onClick={() => setActiveService(null)}>Close</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Services
