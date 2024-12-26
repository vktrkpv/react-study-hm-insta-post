import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [picture, setPhoto] = useState(0);
  const [arrayPictures, setArrayPictures] = useState(data);
  const {photo, comments} = arrayPictures[picture];

  console.log();

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

  const removeComment = (id) => {
    setArrayPictures((prevArrayPictures) => 
      prevArrayPictures.map((pictureObj, index) => 
        index === picture 
    ? {
      ...pictureObj, 
      comments: pictureObj.comments.filter((comment) => comment.id !== id )
    } 
    : pictureObj
        ));
  }

  const deleteAllComments = () => {
    setArrayPictures((prevArrayPictures) => 
      prevArrayPictures.map((pictureObj, index) =>
        index === picture ? {...pictureObj, comments: [] } : pictureObj
      )
    ) ;
  };

 

  return(
    <div>
      <div className='container'>

        <div className='btn-container'>
          <button onClick={previousPicture} className='arr-btn'>&#8249;</button>
        </div>

        <div className='photo-container'>
          <img src={photo} alt='bedroomPhoto' width="400px"/>
        </div>

        <div className='comments-container'>

          {comments.map(({text, id}) => (
            <div key={id} className='comment-box'>
              <p>{text}</p>
              <button onClick={() => removeComment(id)} className='comm-btn'><i className="fa fa-trash-o"></i></button>
            </div>
          ))
          }

          <div>
            {comments.length > 0 && (
          <button onClick={deleteAllComments} className='arr-btn detele-btn'>
            Delete All Comments
          </button>
          )}
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
