import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "..";

describe("Button Component", () => {
  it("applies correct default props", () => {
    render(<Button content="testing123" />);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
    expect(screen.getByRole("button")).toHaveTextContent("testing123");
  });
});
