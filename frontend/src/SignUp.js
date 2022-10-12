import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);

  return (
    <form>
      <label></label>
      <input
        type={text}
        value={email}
        onChange={() => {
          setEmail(e.target.value);
        }}
      />
      <input
        type={text}
        value={email}
        onChange={() => {
          setEmail(e.target.value);
        }}
      />
      <input
        type={text}
        value={email}
        onChange={() => {
          setEmail(e.target.value);
        }}
      />
      <input
        type={text}
        value={email}
        onChange={() => {
          setEmail(e.target.value);
        }}
      />
      <input
        type={text}
        value={email}
        onChange={() => {
          setEmail(e.target.value);
        }}
      />
    </form>
  );
};

export default SignUp;
