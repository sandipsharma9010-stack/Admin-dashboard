import { render, screen } from "@testing-library/react";
import SumAdd from "./SumAdd";

test("renders the static text", () => {
  render(<SumAdd />);
  const text = screen.getByText("Here is output");
  expect(text).toBeInTheDocument();
});

// test("renders the sum result correctly", () => {
//   render(<SumAdd />);
//   const result = screen.getByText("20");
//   expect(result).toBeInTheDocument();
// });
