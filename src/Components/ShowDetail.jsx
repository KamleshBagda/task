import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ShowDetail = () => {
    const [show, setShow] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const handleback = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios.get(`https://api.tvmaze.com/shows/${id}`)
            .then(response => setShow(response.data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <>
            <div className='buttonrel'>
                <h1 className='text-center my-3'>Details</h1>
                <div className="container text-center">
                    <img src={show.image?.original} alt="" className='img-fluid my-2' style={{ height: '600px', width: '600px' }} />
                </div>
                <div className="container">
                    <h2>{show.name}</h2>
                    <h3><span className='text-danger'>Language: </span>{show.language}</h3>
                    <p>{show.summary}</p>
                </div>
                <div className="back" onClick={handleback}>
                    <button className='buttoncls'>Back</button>
                </div>
            </div>
        </>
    );
};

export default ShowDetail;
