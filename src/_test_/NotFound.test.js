import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NotFound from "../pages/NotFound";

test("Should Display Text : Endpoint Tidak Ditemukan", async () => {
  /* Render NotFound.js */
  await render(<NotFound />);

  /* Test Error 404 Text */
  const text404 = screen.getByText(/404/i);
  expect(text404).toBeInTheDocument();

  const showText = screen.getByText(/Endpoint Tidak Ditemukan/i);
  expect(showText).toBeInTheDocument();
});

test("NotFound Page Should Have Logo", async () => {
  /* Render NotFound.js */
  await render(<NotFound />);

  /* Test Image */
  const image = screen.getByAltText("logo-img");
  expect(image).toHaveAttribute("src", "/images/logo-1.png");
});

test("Button Link", async () => {
  /* Render NotFound.js */
  await render(<NotFound />);

  /* Link */
  const backLink = screen.getByRole("link", { name: "Kembali" });
  expect(backLink).toHaveAttribute("href", "/");
});
