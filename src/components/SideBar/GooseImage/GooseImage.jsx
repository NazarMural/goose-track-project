import desktopGooseMainPage from 'assets/images/mainPage/desktop_GooseMainPage.png';
import desktopGooseMainPage2x from 'assets/images/mainPage/desktop_GooseMainPage@2x.png';
import { GooseImg } from './GooseImage.styled';

export const GooseImage = () => {
  return (
    <GooseImg
      src={desktopGooseMainPage}
      srcSet={`${desktopGooseMainPage} 1x, ${desktopGooseMainPage2x} 2x`}
      alt="The goose invites you to organize your life and manage your team "
    />
  );
};
