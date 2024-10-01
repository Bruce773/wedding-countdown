import React from 'react';
import './globals.css';
import BackgroundGradient from './background-gradient.svg';
import Bruce from './bruce.svg';
import Meredith from './meredith.svg';
import PlusIcon from './plus-icon.svg';
import PhotoBanner from './photos-banner.svg';

function App() {
  const weddingDate = new Date('2025-01-03');

  const currentDate = new Date();
  const totalMonths =
    (weddingDate.getFullYear() - currentDate.getFullYear()) * 12 +
    (weddingDate.getMonth() - currentDate.getMonth());
  const totalDays = Math.floor(
    (weddingDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  const monthsUntilWedding = totalMonths;
  const daysAfterMonth = totalDays - monthsUntilWedding * 30;

  return (
    <div>
      <div className='h-screen w-screen absolute'>
        <img
          src={BackgroundGradient}
          alt='Background Gradient'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex items-center justify-center h-screen'>
        <div className='h-fit'>
          <div className='pt-2 md:pt-0 flex items-center justify-center flex-wrap'>
            <img alt='' className='h-[70px] md:h-auto' src={Bruce} />
            <img
              alt=''
              className='ml-40 mr-20 md:ml-16 md:mr-10 h-[20px] md:h-auto'
              src={PlusIcon}
            />
            <img alt='' className='h-[70px] md:h-auto' src={Meredith} />
          </div>
          <div className='flex justify-center md:mt-12'>
            <img alt='' className='h-[300px] md:h-[400px]' src={PhotoBanner} />
          </div>
          <div className='text-center md:mt-14'>
            <div className='font-montserrat font-hairline text-pale-grey text-[25px] md:text-[30px]'>
              ONLY
            </div>
            <div className='flex items-center flex-wrap justify-center flex-col md:flex-row mt-4 md:mt-0'>
              <div className='flex justify-center items-baseline mt-[-45px]'>
                <div className='text-[60px] md:text-[80px] mr-6 font-arefRuqaa'>
                  {monthsUntilWedding}
                </div>
                <div className='text-[40px] font-arefRuqaa text-the-purplest'>
                  Months
                </div>
              </div>
              <div className='font-montserrat font-hairline text-pale-grey text-[30px] md:mx-8 md:text-[50px] leading-[20px] mb-3 md:mb-0'>
                &
              </div>
              <div className='flex justify-center items-baseline mt-[-45px]'>
                <div className='text-[60px] md:text-[80px] mr-6 font-arefRuqaa'>
                  {daysAfterMonth}
                </div>
                <div className='text-[40px] font-arefRuqaa text-the-purplest'>
                  Days
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
