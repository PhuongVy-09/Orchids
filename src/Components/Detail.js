import React from 'react';
import { useParams } from 'react-router-dom';
import { Orchids } from '../Shared/ListOfOrchids';

const Detail = () => {
    const { id } = useParams();  // Destructure id from useParams
    const orchid = Orchids.find(obj => obj.id === parseInt(id));  // Convert id to integer for comparison

    // Check if orchid exists before rendering
    if (!orchid) {
        return <div>Orchid not found</div>;
    }

    // Format cost
    let cost = orchid.cost.toLocaleString();

    return (
        <div className='container'>
            <div className='product-card'>
                <div className='badge'>{orchid.name}</div>
                <div className='product-tumb'>
                    <img src={`../${orchid.img}`} alt={orchid.name} />
                </div>
                <div className='product-details'>
                    <h4>{orchid.origin}</h4>
                    <p>{orchid.category}</p>
                    <p>Cost: ${cost}</p>
                </div>
            </div>
        </div>
    );
};

export default Detail;
