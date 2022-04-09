import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form 
      onSubmit={handleSubmit}>
      <label>Name</label>
      <input 
      type='text'
      value={name}
      onChange={setName}
      />
      <label>Phone Number</label>
      <input 
      type='tel'
      value={phone}
      onChange={setPhone}
      />
      <label>email</label>
      <input
      type='email'
      value={email}
      onChange={setEmail} />
      <input 
      type='submit'
       />
    </form>
      
    
  );
};
