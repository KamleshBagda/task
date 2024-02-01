import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowList = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        axios.get('https://api.tvmaze.com/search/shows?q=all')
            .then(response => setShows(response.data))
            .catch(error => console.error(error));
        console.log('shgdv', shows)
    }, []);

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <h1>TV Shows</h1>
                    <img src="https://img.freepik.com/premium-psd/poster-design-template-mockup_574474-942.jpg?size=626&ext=jpg&ga=GA1.1.966068405.1706683627&semt=sph" alt="" className='img-fluid text-center' style={{ height: '700px', width: '1320px' }} />
                </div>
            </div>
            <div className="container-fluid">
                <h1 className='text-center my-3'>TV SHOWS</h1>
                {shows.map(e => (
                    <div className="card d-inline-flex mx-1 my-4 bg-black" style={{ width: '18rem', height: "27rem", overflow: 'hidden' }} key={e.show.id}>
                        <Link to={`/show/${e.show.id}`} className='text-decoration-none'>
                            <img src={e.show.image?.medium} className='img-fluid rounded-3' style={{ height: '300px', width: '290px' }} />
                            <div className="card z-3 b-0" style={{ background: 'black', overflow: 'hidden' }} >
                                <div className="card-body p-2" style={{ background: 'black', color: '#aaaaaa', overflow: 'hidden', height: '220px' }}>
                                    <h3 className="card-title text-white fw-bold fs-3 my-1">{e.show.name}</h3>
                                    <h5 className="card-title text-white ">{e.show.rating.average}</h5>
                                    <h4 className="card-title text-white my-1">{e.show.ended}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

        </>
    );
};

export default ShowList;
