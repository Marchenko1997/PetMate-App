import Select from "react-select";
import { useMediaQuery } from "react-responsive";
import { useNotices } from "../../../../hooks/useNotices";


const ByGenderSelect = ({ setGenderQuery, genderQuery, setCurrentPage }) => {
     const tablet = useMediaQuery({ minWidth: 768 });
     const tabletEnd = useMediaQuery({ maxWidth: 1279.98 });
    const desktop = useMediaQuery({ minWidth: 1280 });
    const { genders } = useNotices();

    const gendersData = [
        { value: "", label: "Show All" },
        ...genders?.map((item) => ({
            value: item,
            label: item?.chart(0).toUpperCase() + item?.slice(1),
        }))
 ]

    const handleChangeGender = (e) => {
        setGenderQuery(e?.value);
        setCurrentPage(1);
    } 
    
    const selectValue =
        genderQuery === null
            ? null
            : gendersData.find((option) => option.value === genderQuery)
    
  return (
    <div>
      <Select
        value={selectValue}
        onChange={handleChangeGender}
        options={gendersData}
        placeholder={"By gender"}
        maxMenuHeight={186}
        isClearable={true}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: "1px solid transparent",
            width: tablet && tabletEnd ? "170px" : desktop ? "190px" : "143px",
            height: tablet ? "48px" : "42px",
            outline: "none",
            boxShadow: "none",
            background: "var(--white-color)",
            borderRadius: "30px",
            fontSize: tablet ? "16px" : "14px",
            fontWeight: "500",
            lineHeight: tablet ? "1.25" : "1.29",
            letterSpacing: "-0.03em",
            color: "var(--dark-color)",
            fontFamily: "Manrope",
            cursor: "pointer",
            "&:hover": {
              borderColor: "var(--accent-color)",
            },
            "&:focus-within": {
              borderColor: "var(--accent-color)",
              outline: "none",
            },
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            border: "none",
            fontSize: tablet ? "16px" : "14px",
            fontWeight: "500",
            fontFamily: "Manrope",
            lineHeight: "1.25",
            background: "transparent",
            cursor: "pointer",
            color: state.isFocused
              ? "var(--accent-color)"
              : "var(--placeholder-color)",
          }),
          valueContainer: (baseStyles) => ({
            ...baseStyles,
            borderRadius: "30px",
            boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            width: tablet ? "170px" : "143px",
            borderRadius: "15px",
          }),
        }}
      />
    </div>
  );
}

export default ByGenderSelect