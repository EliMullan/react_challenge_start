import React from "react";

export const ContactPicker = ({ contacts, onChange}) => {

  return (
    <select name='contact'  onChange={onChange}>
        <option value='noOption' key='default' selected='selected'> No option selected </option>
        {contacts.map((item) => {
          <option value={item} key={item}> {item}</option>
        })}
    </select>
  );
};
