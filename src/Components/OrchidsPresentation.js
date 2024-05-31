import React from 'react'
export default function OrchidsPresentation({orchids}) {
    console.log(orchids)
    return (
        <div className='container'>
            {orchids.map((orchid)=>(
                <div className='column'>
                    <div className='card'>
                        <img src={orchid.img} alt=''/>
                            <h3>{orchid.name}</h3>
                            <p className='title'>{orchid.origin}</p>
                            <p><button>Detail</button></p>

                    </div>
                </div>
            ))}
        </div>
    )
}

// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


// Orchids.propTypes = {
//     orchid: PropTypes.object.isRequired,
// }
// function Orchids({ orchid }) {
//     return (
//         <div className='container'>
//             <div className='colunm'>
//                 <div className='card'>
//                 <img src={orchid.img} alt={orchid.name}  onError={(e) => { e.target.onerror = null; e.target.src = "path/to/placeholder.jpg"; }} />
//                         <h3>{orchid.name}</h3>
//                         <p className='title'>{orchid.origin}</p>
//                         <div className='detail'>
//                             <Link className='link' to={`/detail/${orchid.id}`}>Detail</Link>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// Orchids.propTypes = {}

// export default Orchids