import React from 'react';
import  AuthSection  from '../components/Main/AuthSection/AuthSection'; 
// import Description from 'components/Description'; 
// import ReviewsSlider from '.components/ReviewsSlider'; 
import MainLayout  from '../components/MainLayout/MainLayout'; 

const MainPage = () => {
  return (
    <MainLayout>
      <AuthSection />
      {/* <Description />
      <ReviewsSlider /> */}
    </MainLayout>
  );
};

export default MainPage;
