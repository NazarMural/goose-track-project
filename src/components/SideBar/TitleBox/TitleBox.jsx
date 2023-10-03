import { CloseSideBarBtn } from '../CloseBtn/CloseBtn';
import { GooseImage } from '../GooseImage/GooseImage';
import { TitleBoxEl } from './TitleBox.styled';

export const TitleBox = ({ removeSideBar }) => {
  return (
    <TitleBoxEl>
      <GooseImage />
      <h2>
        G<span>oo</span>seTrack
      </h2>
      <CloseSideBarBtn removeSideBar={removeSideBar} />
    </TitleBoxEl>
  );
};
