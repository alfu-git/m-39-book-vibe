import React from 'react';
import BannerImg from '../../../assets/banner-img.png';

const Banner = () => {
  return (
    <section className='mb-25 container mx-auto px-5'>
      <div>
        <div className='py-20 lg:px-30 bg-[#131313]/5 rounded-3xl flex flex-col-reverse lg:flex-row items-center justify-between gap-20'>

          <div className='max-w-130 flex flex-col justify-center items-center lg:block'>
            <h1 className='mb-12 text-5xl md:text-[56px] lg:text-5xl xl:text-[56px] text-[#131313] font-bold playfair-font text-center lg:text-left leading-tight'>Books to freshen up your bookshelf</h1>

            <button className='btn border-none shadow-none h-16 bg-[#23BE0A] rounded-lg text-base-100 text-xl font-bold'>
              View The List
            </button>
          </div>

          <div>
            <img src={BannerImg} alt="THE DATING PLAYBOOK FOR MAN book png" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;