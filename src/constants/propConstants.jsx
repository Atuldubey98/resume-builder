export const loginButtonProps = {
  text: "Login",
  type: "submit",
  icon: <i className="fa-solid fa-arrow-right-to-bracket icon" />,
};

export const registerLinkProps = {
  to: "/register",
  text: "Register Instead ?",
  icon: <i className="fa-solid fa-address-card icon" />,
};

export const registerButtonProps = {
  text: "Register",
  type: "Submit",
  icon: <i className="fa-solid fa-address-card icon" />,
};
export const loginLinkProps = {
  to: "/login",
  text: "Login Instead ?",
  icon: <i className="fa-solid fa-arrow-right-to-bracket icon" />,
};

export const headerIconProps = [
  {
    text: "Create Account",
    to: "/register",
    className: "header__link",
    icon: <i className="fa-solid fa-address-card icon" />,
  },
  {
    text: "Sign In",
    to: "/login",
    className: "header__link",
    icon: <i className="fa-solid fa-arrow-right-to-bracket icon" />,
  },
];
export const getContactProps = (contact, onChange) => {
  const { name, title, email, phone, social, location } = contact;
  return [
    {
      name: "name",
      label: "name",
      type: "text",
      value: name,
      onChange,
    },
    {
      name: "title",
      onChange,
      type: "text",
      value: title,
      label: "Headline or Title",
    },
    {
      name: "email",
      onChange,
      value: email,
      label: "Email",
      type: "email",
    },
    {
      name: "phone",
      value: phone,
      onChange,
      type: "tel",
      label: "Phone Number",
    },
    {
      name: "social",
      onChange,
      type: "url",
      value: social,
      label: "Linkedin or Social",
    },
    {
      name: "location",
      onChange,
      value: location,
      label: "Location",
      type: "text",
    },
  ];
};

export const saveContactProps = {
  text: "Save",
  icon: <i className="fa-solid fa-user-plus" />,
};
