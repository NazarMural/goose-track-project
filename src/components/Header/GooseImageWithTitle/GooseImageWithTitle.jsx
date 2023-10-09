import gooseImageHeader from 'assets/images/goosePageDay.png';
import { GooseImageEl, PageTitle } from './GooseImageWithTitle.styled';
// import desktopGooseMainPage2x from 'assets/images/mainPage/desktop_GooseMainPage@2x.png';
// import { PageTitle } from './GooseImageWithTitle.styled.styled';
export const GooseImageWithTitle = ({ currentPageTitle }) => {
  return (
    <>
      <GooseImageEl
        src={gooseImageHeader}
        alt="The goose invites you to organize your life and manage your team "
      />
      <PageTitle>{currentPageTitle}</PageTitle>
      <p><span>Let go</span> of the past and focus on the present!</p>
    </>
  );
};
