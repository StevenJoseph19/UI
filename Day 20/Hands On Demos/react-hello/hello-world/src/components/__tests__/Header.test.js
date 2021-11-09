import { render, screen } from "@testing-library/react";
import Header from "../Header";

it("renders correctly", () => {
  const div = document.createElement("div");

  render(<Header />, div);
});
