import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "./style.css";

const animatedComponents = makeAnimated();

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra' ,label: 'Orchestra' },

  // { value: "blue 01", label: "Blue 01" },
  // { value: "red 02", label: "Red 02" },
  // { value: "namaste 03", label: "Namaste 03" },
  // { value: "hello 04", label: "Hello 04" },
  // { value: "world 05", label: "World 05" },
];

export const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelect = () => {
    console.log(selectedOptions);
  };

  return (
    <>
    <h1>React Select Project</h1>
      <Select
        defaultValue={[options[0], options[2]]}
        components={animatedComponents}
        isMulti
        options={options}
        onChange={(item) => setSelectedOptions(item)}
        className="select"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />

      <button onClick={handleSelect}>Submit itens</button>
    </>
  );
};
