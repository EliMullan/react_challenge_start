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
  const handleNameChange = e => {
    setName(e.target.value);
  }

  const handlePhoneChange = e => {
    setPhone(e.target.value);
   }

   const handleEmailChange = e => {
     setEmail(e.target.value);
   }


  return (
    <form 
      onSubmit={handleSubmit}>
      <label>Name</label>
      <input 
      type='text'
      value={name}
      onChange={handleNameChange}
      />
      <label>Phone Number</label>
      <input 
      type='tel'
      value={phone}
      pattern="/^(0[124-9]\d{0,2})\d{7}$/g"
      onChange={handlePhoneChange}
      />
      <label>email</label>
      <input
      type='email'
      value={email}
      onChange={handleEmailChange} />
      <input 
      type='submit'
       />
    </form>
      
    
  );
};
