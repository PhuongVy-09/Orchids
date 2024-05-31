
import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
export default function Navbar() {
 
  return (
    <div>
       <nav>
            <ul>
                <li><a className='active' href='#home'>Home</a></li>
                <li><a href='#news'>News</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#contact'>Contact</a></li>

                {/* <div className="icons">
                     <FavoriteIcon/>
                     <AddShoppingCartIcon/>
                     <PersonIcon/>
                </div> */}

             </ul>
            
        </nav>


    </div>
   
        
    
)
  }



//   <nav>
//   <ul>
//       <li className="logo"><a href="#flower">Flower</a></li>
  
     
//       <li className="active" ><a href="#home">Home</a></li>
      
//       <li><a href="#news">News</a></li>
//       <li><a href="#about">About</a></li>
//       <li><a href="#contact">Contact</a></li>

//       <li className="icons">
//           <FavoriteIcon/>
//           <AddShoppingCartIcon/>
//           <PersonIcon/>
//       </li>

     
//    </ul>
   
// </nav> 