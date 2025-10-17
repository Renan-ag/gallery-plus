import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import { useCallback, useState, type ChangeEvent } from "react";
import { debounce } from "../helpers/utils";

export default function PhotosSearch() {
  const [inputValue, setInputValue] = useState("");
  const debouncedSetValue = useCallback(
    debounce((value: string) => {
      console.log(value);
    }, 300),
    []
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      onChange={handleInputChange}
      placeholder="Buscar fotos"
      value={inputValue}
      className="flex-1"
    />
  );
}
