import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [picture, setPhoto] = useState(0);
  const {id, photo, commentOne, commentTwo, commentThree, commentFour} = data[picture];


  const previousPicture = () => {
    setPhoto((picture => {
      picture--;
      if(picture < 0) {
        return data.length-1;
      }
      return picture;
    }))
  }

  const nextPicture = () => {
    setPhoto(( picture => {
      picture++;
      if( picture > data.length -1 ){
        picture = 0;
      }
      return picture;
    }))
  }

  return(
    <div>
      <div className='container'>

        <div className='btn-container'>
          <button onClick={previousPicture} className='arr-btn'>&#8249;</button>
        </div>

        <div className='photo-container'>
          <img src={photo} alt='bedroomPhoto' width="400px"/>
        </div>

        <div className='comments-container' key={id}>
       
          <div className='comment-box'>
            <p>{commentOne}</p>
            <button className='comm-btn'><i className="fa fa-trash-o"></i></button>
          </div>

          <div className='comment-box'>
          <p>{commentTwo}</p>
          <button className='comm-btn'><i className="fa fa-trash-o"></i></button>

          </div>

          <div className='comment-box'>
          <p>{commentThree}</p>
          <button className='comm-btn'><i className="fa fa-trash-o"></i></button>

          </div>

          <div className='comment-box'>
          <p>{commentFour}</p>
          <button className='comm-btn'><i className="fa fa-trash-o"></i></button>
          </div>

          <div>
          <button onClick={() => setPhoto([])} className='arr-btn detele-btn'>
            Delete All Comments
          </button>
        </div>

        </div>

        

        <div className='btn-container'>
          <button onClick={nextPicture} className='arr-btn' >&#8250;</button>

        </div>

      </div>
      
      
    </div>
  )
  
}

export default App;
