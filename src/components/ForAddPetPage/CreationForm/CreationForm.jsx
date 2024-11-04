// @ts-nocheck
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { addPet } from "../../../redux/auth/operations";
import sprite from "../../../assets/icons/sprite.svg";
import SexButtons from "./SexButtons/SexButtons";
import PetAvatar from "./PetAvatar/PetAvatar";
import { addPetSchema } from "../../../schemas/schemas";
import BirthdayInput from "./BirthdayInput/BirthdayInput";
import TypeAnimal from "./TypeAnimal/TypeAnimal";
import {
  BackBtn,
  BoxContainer,
  ButtonsBox,
  ErrorMsg,
  InputBox,
  InputNormal,
  InputPetImage,
  InvisibleInput,
  SubmitBtn,
  UploadContainer,
} from "./CreationForm.styled";
import {
  Label,
  AddAvatarInput,
} from "../../ForProfilePage/EditProfileModal/FormEditUser/FormEditUser.styled";

const CreationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const preset_key = import.meta.env.REACT_APP_PRESET_KEY;
  const cloudURL = import.meta.env.REACT_APP_CLOUDINARY_URL;
  const [sexPet, setSexPet] = useState("unknown");
  const [petImageURL, setPetImageURL] = useState("");
  const [petType, setPetType] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addPetSchema),
  });

  const onSubmit = (data) => {
    dispatch(addPet(data));
    navigate("/profile");
  };

  useEffect(() => {
    if (sexPet === "unknown") setValue("sex", sexPet);

    if (petType) setValue("species", petType);

    if (birthDate) setValue("birthday", birthDate);
  }, [birthDate, petType, sexPet, setValue]);

  const handleUploadAvatar = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    fetch(cloudURL, { method: "POST", body: formData })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Upload failed");
        }
        return res.json();
      })
      .then((data) => setValue("imgURL", data.secure_url))
      .catch((error) => console.log("Upload error:", error.message));
    const fileURL = URL.createObjectURL(file);
    setPetImageURL(fileURL);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SexButtons setSexPet={setSexPet} sexPet={sexPet} />
      <InvisibleInput type="text" {...register("sex")} />
      <ErrorMsg>{errors.sex?.message}</ErrorMsg>
      <PetAvatar petImageUrl={petImageURL} />
      <UploadContainer>
        <label>
          <InputPetImage
            type="text"
            {...register("imgURL")}
            placeholder="Enter URL"
          />
          <ErrorMsg>{errors.imgURL?.message}</ErrorMsg>
        </label>
        <Label>
          <AddAvatarInput
            type="file"
            name="avatarFile"
            onChange={handleUploadAvatar}
          />
          <svg width={18} height={18}>
            <use xlinkHref={`${sprite}#icon-upload-cloud`}></use>
          </svg>
        </Label>
      </UploadContainer>
      <InputBox>
        <InputNormal type="text" {...register("title")} placeholder="Title" />
        <ErrorMsg>{errors.title?.message}</ErrorMsg>
      </InputBox>
      <InputBox>
        {" "}
        <InputNormal
          type="text"
          {...register("name")}
          placeholder="Pet's Name"
        />
        <ErrorMsg>{errors.name?.message}</ErrorMsg>
      </InputBox>
      <BoxContainer>
        <div>
          <BirthdayInput setBirthDate={setBirthDate} birthDate={birthDate} />
          <ErrorMsg>{errors.birthday?.message}</ErrorMsg>
          <InvisibleInput type="text" {...register("birthday")} />
        </div>
        <div>
          <TypeAnimal setPetType={setPetType} petType={petType} />
          <ErrorMsg>{errors.species?.message}</ErrorMsg>
          <InvisibleInput type="text" {...register("species")} />
        </div>
      </BoxContainer>
      <ButtonsBox>
        <BackBtn to={"/profile"}>Back</BackBtn>
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </ButtonsBox>
    </form>
  );
};

export default CreationForm;
