import { getButtonClasses } from "../styles";

export default {
  title: "Button",
  argTypes: {
    color: {
      control: "radio",
      options: ["primary", "secondary", "tertiary"],
      defaultValue: "primary",
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      defaultValue: "large",
    },
    iconPosition: {
      control: "radio",
      options: ["start", "end"],
      defaultValue: "start",
    },
    fullwidth: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

export const PrimaryButton = (args) => {
  const buttonClasses = getButtonClasses({ ...args });

  return `
  <button type="button" class="${buttonClasses.button}">
    <svg class="${buttonClasses.icon}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor">
        <path d="M12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.8688 9.22592L11.9112 14.6141" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9.19593 11.8988L14.5841 11.9412" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    PrimaryButton
  </button>
    `;
};

export const PrimaryButtonDisabled = (args) => {
  const buttonClasses = getButtonClasses({ ...args });

  return `
  <button disabled type="button" class="${buttonClasses.button}">
    PrimaryButtonDisabled
  </button>
    `;
};
