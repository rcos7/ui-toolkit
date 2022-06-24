import {
  borderRadius,
  classnames,
  textColor,
  ringColor,
  ringWidth,
  ringOffsetWidth,
  fontSize,
  margin,
  fontWeight,
  backgroundColor,
  boxShadow,
  cursor,
  height,
  padding,
  width,
  alignItems,
  display,
  borderColor,
  borderWidth,
  textDecorationThickness,
  textDecorationColor,
  textUnderlineOffset,
  outlineStyle,
  textDecoration,
  justifyContent,
  flexDirection,
  pointerEvents,
  fontSmoothing,
} from "tailwindcss-classnames";

const buttonColorLarge = {
  primary: padding("py-3", "px-6"),
  secondary: padding("py-2.5", "px-5"),
  tertiary: padding("py-3", "px-6"),
};

const buttonColor = {
  primary: padding("py-1.5", "px-4"),
  secondary: padding("py-1", "px-4"),
  tertiary: padding("py-1.5", "px-2"),
};

const sizeClasses = (options) => {
  if (options && options.size === "large") {
    return buttonColorLarge[options.color];
  }

  return buttonColor[options.color];
};

export const getButtonClasses = (options) => {
  const defaults = {
    color: options && options.color in buttonColor ? options.color : "primary",
    size: options && options.size ? options.size : "large",
    iconPosition:
      options && options.iconPosition ? options.iconPosition : "start",
    fullwidth: options && options.fullwidth ? options.fullwidth : false,
  };

  const primaryButtonClasses = [
    sizeClasses(defaults),
    backgroundColor(
      "bg-[color:var(--button-base-primary)]",
      "active:bg-emerald-900",
      "hover:bg-[color:var(--button-base-primary-hover)]"
    ),
    textColor("text-white", "disabled:text-neutral-600"),
  ];

  const secondaryButtonClasses = [
    sizeClasses(defaults),
    textColor(
      "text-cyan-500",
      "active:text-cyan-900",
      "disabled:text-neutral-600"
    ),
    borderWidth("border-2"),
    borderColor(
      "disabled:border-neutral-400",
      "border-cyan-500",
      "active:border-cyan-900"
    ),
    backgroundColor("bg-white", "active:bg-cyan-50"),
  ];

  const tertiaryButtonClasses = [
    "group",
    sizeClasses(defaults),
    textColor("text-emerald-500", "disabled:text-neutral-500"),
    textDecoration(
      "hover:underline",
      "focus:underline",
      "disabled:no-underline"
    ),
    textDecorationThickness("hover:decoration-2", "focus:decoration-2"),
    textDecorationColor(
      "hover:decoration-cyan-500",
      "focus:decoration-cyan-500"
    ),
    textUnderlineOffset("hover:underline-offset-8", "focus:underline-offset-8"),
  ];

  return {
    button: classnames([
      defaults.fullwidth ? width("w-full") : "",
      pointerEvents("pointer-events-auto"),
      ...(defaults.color === "primary"
        ? primaryButtonClasses
        : defaults.color === "secondary"
        ? secondaryButtonClasses
        : tertiaryButtonClasses),
      defaults.size === "large"
        ? classnames(borderRadius("rounded-xl"), fontSize("text-base"))
        : defaults.size === "medium"
        ? classnames(borderRadius("rounded-lg"), fontSize("text-sm"))
        : classnames(borderRadius("rounded-lg"), fontSize("text-xs")),
      fontWeight("font-semibold"),
      fontSmoothing("antialiased"),
      backgroundColor("disabled:bg-neutral-100"),
      boxShadow("hover:shadow", "disabled:shadow-none"),
      ringWidth("focus-visible:ring-2"),
      ringColor("focus-visible:ring-tertiary-500"),
      ringOffsetWidth("focus-visible:ring-offset-4"),
      cursor("disabled:cursor-not-allowed"),
      display("flex"),
      alignItems("items-center"),
      outlineStyle("outline-none"),
      justifyContent("justify-center"),
      defaults.iconPosition === "start"
        ? flexDirection("flex-row")
        : flexDirection("flex-row-reverse"),
    ]),
    icon: classnames(
      defaults.color === "tertiary"
        ? classnames(
            textColor("text-cyan-500"),
            "group-disabled:text-neutral-500"
          )
        : "",
      defaults.iconPosition === "start" ? margin("mr-2") : margin("ml-2"),
      defaults.size === "large"
        ? classnames(width("w-5"), height("h-5"))
        : classnames(width("w-4"), height("h-4"))
    ),
  };
};
