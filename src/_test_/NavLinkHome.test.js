import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../components/Navbar";
import LayoutContextProvider from "../context/LayoutContext";
import NavLinkHome from "../components/NavLinkHome";
import { MemoryRouter } from "react-router";

test("Render Link Home and Direct to #home", () => {
  render(
    <LayoutContextProvider>
      <Navbar>
        <NavLinkHome />
      </Navbar>
    </LayoutContextProvider>
  );

  /* Link Home*/
  const homeLink = screen.getByRole("link", { name: "Home" });
  expect(homeLink).toHaveAttribute("href", "#home");
});

test("renders NavLinkHome and send to #contact", () => {
  render(
    <MemoryRouter>
      <NavLinkHome />
    </MemoryRouter>
  );

  /* Link Contact */
  const navLinkContact = screen.getByRole("link", { name: "Contact" });
  expect(navLinkContact).toHaveAttribute("href", "#contact");
});

test("renders NavLinkHome and send to #about-us", async () => {
  await render(
    <MemoryRouter>
      <NavLinkHome />
    </MemoryRouter>
  );
  const navLink = screen.getByRole("link", { name: "About us" });
  expect(navLink).toHaveAttribute("href", "#about-us");
});

test("renders NavLinkHome and send to /login", async () => {
  await render(
    <MemoryRouter>
      <NavLinkHome />
    </MemoryRouter>
  );
  const navLink = screen.getByRole("link", { name: "Login" });
  expect(navLink).toHaveAttribute("href", "/login");
});
