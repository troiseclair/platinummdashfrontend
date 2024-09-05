import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";
import LayoutContextProvider from "../context/LayoutContext";

test("Navbar Logo", () => {
  render(
    <LayoutContextProvider>
      <Navbar />
    </LayoutContextProvider>
  );
  /* Test Image */
  const image = screen.getByAltText("logo");
  expect(image).toHaveAttribute("src", "/images/logo-1.png");
});
