import React from 'react';
import { useState } from 'react';
import { Orchids } from '../Shared/ListOfOrchids';
import { Link } from 'react-router-dom'
export default function OrchidsComponent() {
    const [orchid,setOrchid] = useState([])
    return (
        // <div className='container'>
        //     {Orchids.map((orchid, index) => (
        //         <div className='column' key={index}>
        //             <div className='card'>
        //                 <img src={orchid.img} alt={orchid.name} />
        //                 <h3>{orchid.name}</h3>
        //                 <p className='title'>{orchid.origin}</p>
        //                 <button onClick={()=>{setOrchid(orchid)}}><a href='#popup1' id='openPopUp'>Detail</a></button>
        //             </div>
        //         </div>
        //     ))}
        //     <div id='popup1' className='overlay'>
        //         <div className='popup'>
        //             <img src={orchid.img} alt=''/>
        //             <h2>{orchid.name}</h2>
        //             <button className='close' href='#'>&times;</button>
        //             <div className='content'>
        //                 {orchid.category}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='orchids'>
            <div className='orchids__img'>
                <img src={orchid.img} alt={orchid.name}/>

            </div>
            <h4 className='orchids__name'>{orchid.name}</h4>
            <h4 className='orchids__origin'>{orchid.origin}</h4>
            <h4 className='orchids__category'>{orchid.cat}</h4>
            <div className='orchids__detail'>
                <Link className='orchids__link' to={`/detail/${orchid.id}`}>Detail</Link>
            </div>
        </div>
    );
}







// import React, { Component } from 'react'

// export default class Orchids extends Component {
//   render() {
//     return (
//       <div className='container'>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Dowiana.jpg' alt=''/>
//                 <h3 className='title'> Cattleya Dowiana </h3>
//                 <p className='title1'> Brazil </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>

//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Forbesii.jpg' alt="" />
//                 <h3 className='title'> Cattleya Forbesii</h3>
//                 <p className='title1'> South America </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>

//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya gaskelliana.jpg' alt="" />
//                 <h3 className='title'> Cattleya Gaskelliana</h3>
//                 <p className='title1'> Cananda </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>

//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Intermedia.jpg' alt="" />
//                 <h3 className='title'> Cattleya Intermedia </h3>
//                 <p className='title1'> USA </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>

//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Ioddigesii.jpg' alt="" />
//                 <h3 className='title'> Cattleya Ioddigesii </h3>
//                 <p className='title1'> South USA </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>

//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Labiata.jpg' alt="" />
//                 <h3 className='title'> Cattleya Labiata </h3>
//                 <p className='title1'> Brazil </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>

//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Lealia Purpurata.jpg' alt="" />
//                 <h3 className='title'> Cattleya Lealia Purpurata</h3>
//                 <p className='title1'> America </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Lueddemanniana.jpg' alt="" />
//                 <h3 className='title'> Cattleya Iueddemanniana </h3>
//                 <p className='title1'> Brazil </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Maxima.jpg' alt="" />
//                 <h3 className='title'> Cattleya Maxima </h3>
//                 <p className='title1'> Canada </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Mossiae.jpg' alt="" />
//                 <h3 className='title'> Cattleya Mossiae </h3>
//                 <p className='title1'> Australia </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Orchids.jpg' alt="" />
//                 <h3 className='title'> Cattleya Orchids </h3>
//                 <p className='title1'> Brazil </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya Violacea.jpg' alt="" />
//                 <h3 className='title'> Cattleya Violacea </h3>
//                 <p className='title1'> China </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya walkeriana.jpg' alt="" />
//                 <h3 className='title'> Cattleya Walkeriana</h3>
//                 <p className='title1'> Brazil </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Cattleya warscewiczii.jpg' alt="" />
//                 <h3 className='title'> Cattleya Warscewiczii </h3>
//                 <p className='title1'> South USA </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
//         <div className='column'>
//             <div className='card'>
//                 <img src='assets/img/Christmas Orichid.jpg' alt="" />
//                 <h3 className='title'> Christmas Orichid </h3>
//                 <p className='title1'> Brazil </p>
//                 <p><button>Detail</button></p>
//             </div>
//         </div>
       

//       </div>
//     )
//   }
// }






