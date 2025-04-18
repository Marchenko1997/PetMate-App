// @ts-nocheck

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../../../schemas/schemas.js";
import { editUser } from "../../../../redux/auth/operations.js";
import { useAuth } from "../../../../hooks/useAuth.js";
import sprite from "../../../../assets/icons/sprite.svg";
import { ErrorMsg } from "../../../ForAddPetPage/CreationForm/CreationForm.styled.jsx";
import {
  AddAvatarInput,
  FormContainer,
  InputAvatarURL,
  InputStandart,
  Label,
  SubmitBtn,
} from "./FormEditUser.styled.jsx";

const FormEditUser = ({ setImageURL, setShowEditForm }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const preset_key = import.meta.env.VITE_PRESET_KEY;
  const cloudURL = import.meta.env.VITE_CLOUDINARY_URL;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(editUser(data));
    setShowEditForm(false);
  };

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
      .then((data) => setValue("avatar", data.secure_url))
      .catch((error) => console.log("Upload error:", error.message));
    const fileURL = URL.createObjectURL(file);
    setImageURL(fileURL);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          <InputAvatarURL
            type="text"
            {...register("avatar")}
            defaultValue={user?.avatar || "Avatar URL"}
          />
          <ErrorMsg>{errors.avatar?.message}</ErrorMsg>
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
      </div>
      <InputStandart
        type="text"
        {...register("name")}
        defaultValue={user.name}
      />
      <ErrorMsg>{errors.name?.message}</ErrorMsg>
      <InputStandart
        type="email"
        {...register("email")}
        defaultValue={user.email}
      />
      <ErrorMsg>{errors.email?.message}</ErrorMsg>
      <InputStandart
        type="tel"
        {...register("phone")}
        defaultValue={user?.phone || "+380"}
      />
      <ErrorMsg>{errors.phone?.message}</ErrorMsg>
      <SubmitBtn type="submit">Save</SubmitBtn>
    </FormContainer>
  );
};

export default FormEditUser;
