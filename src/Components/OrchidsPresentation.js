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
