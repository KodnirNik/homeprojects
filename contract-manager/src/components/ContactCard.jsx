import unknownImg from '../assets/user01.png';
import boyImg from '../assets/guy-orange.PNG';
import girlImg from '../assets/woman-with-laptop-thinking.png';

export default function ContactCard({contact}) {
    let userImg = contact.gender === 'female' ? girlImg : 
            contact.gender === 'male' ? boyImg : unknownImg;
    
    return (
      <div className="card mb-3">
        <div className="row pe-5">
  
          <div className="pic col-3">
            <img src={userImg} alt="user" className='img-fluid rounded-start'/>
          </div>
          <div className="card-body col-9">
              <div className="card-title display-6">{contact.fullName}</div>
              <div className="card-text">{contact.email}</div>
          </div>
          
        </div>
      </div>
    )
  }
