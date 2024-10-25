import React, { useState } from 'react';
import hospitalData from './formatted_hospitals_info.json';
import '../scripts/HospitalSearch.css';

const HospitalSearch = () => {
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [cities, setCities] = useState([]);
    const [hospitals, setHospitals] = useState([]);

    const handleStateChange = (e) => {
        const state = e.target.value;
        setSelectedState(state);

        const stateCities = hospitalData[state] ? Object.keys(hospitalData[state]) : [];
        setCities(stateCities);
        setSelectedCity('');
        setHospitals([]);
    };

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);

        const cityHospitals = hospitalData[selectedState][city] || [];
        setHospitals(cityHospitals);
    };

    return (

        <div className='hospital-main-heading mt-5'>
            <h1>Nearby Hospitals: Care Is Just Around the Corner</h1>
            <div className="hospital-search-container mb-5">
                <h1>Hospital Search</h1>

                <div className="dropdown-container">
                    <label htmlFor="state-select">Select State: </label>
                    <select id="state-select" value={selectedState} onChange={handleStateChange} className="dropdown">
                        <option value="">--Choose a state--</option>
                        {Object.keys(hospitalData).map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedState && (
                    <div className="dropdown-container">
                        <label htmlFor="city-select">Select City: </label>
                        <select id="city-select" value={selectedCity} onChange={handleCityChange} className="dropdown">
                            <option value="">--Choose a city--</option>
                            {cities.map((city) => (
                                <option key={city} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>
                )}


                {selectedCity && hospitals.length > 0 && (
                    <div className="hospital-list">
                        <h2>Hospitals in {selectedCity}</h2>
                        <div className="hospital-cards">
                            {hospitals.map((hospital, index) => (
                                <div key={index} className="hospital-card">
                                    <h3>{hospital.name}</h3>
                                    <p><strong>Doctor:</strong> {hospital.doctor}</p>
                                    <p><strong>Contact:</strong> {hospital.contact}</p>
                                    <p><strong>Address:</strong> {hospital.address}</p>
                                    <a href={hospital.website} target="_blank" rel="noopener noreferrer">
                                        Visit Website
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {selectedCity && hospitals.length === 0 && (
                    <p>No hospitals found in {selectedCity}.</p>
                )}
            </div>
        </div>
    );
};

export default HospitalSearch;
