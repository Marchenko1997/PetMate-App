import sprite from "../../../../assets/icons/sprite.svg";
import { AvatarContainer, ImageBox } from "./PetAvatar.styled";

const PetAvatar = ({ petImageUrl }) => {
  return (
    <AvatarContainer>
      <ImageBox>
        {petImageUrl !== "" ? (
          <img src={petImageUrl} alt="Pet's avatar" />
        ) : (
          <svg width={34} height={34}>
            <use xlinkHref={`${sprite}#icon-footprint`}></use>
          </svg>
        )}
      </ImageBox>
    </AvatarContainer>
  );
};

export default PetAvatar;
