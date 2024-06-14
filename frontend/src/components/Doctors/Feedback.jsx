import { formatDate } from '../../utils/formatDate';
import { AiFillStar } from 'react-icons/ai';
import avatarImg from '../../assets/images/avatar-icon.png';
import { useState } from 'react';
import FeedbackForm from './FeedbackForm';

const Feedback = () => {

    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor">All Reviews (269)</h4>
        <div className="flex justify-between gap-10 mt-[30px]">
            <div className="flex gap-3">
              <figure className='w-10 h-10 rounded-full'>
                <img src={avatarImg} alt=""/>
              </figure>
              <div>
                <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>John</h5>
                <p className='text-[14px] leading-6 text-textColor'>
                  {formatDate('05-08-2024')}
                </p>
                <p className='text__para mt-3 font-medium text-[15px]'>
                  Good checkup, Highly recommended👍
                </p>
              </div>
            </div>
            <div className='flex gap-1'>
              {[...Array(5).keys()].map((_, starIndex) => (
                <AiFillStar key={starIndex} color='#0067FF'/>
              ))}
            </div>
          </div>
      </div>
      
      {!showFeedbackForm && (
        <div className='text-center'>
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
};

export default Feedback;
