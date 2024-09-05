import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LayoutContextProvider from "../context/LayoutContext";
import NavLinkDashboard from "../components/NavLinkDashboard";
import { BrowserRouter } from "react-router-dom";

test("Dashboard Link Button", () => {
  render(
    <LayoutContextProvider>
      <NavLinkDashboard />
    </LayoutContextProvider>,
    { wrapper: BrowserRouter }
  );
  const linkButton = screen.getByRole("link", { name: "Dashboard" });
  expect(linkButton).toHaveAttribute("href", "/dashboard");
});

test("Employee Link Button", () => {
  render(
    <LayoutContextProvider>
      <NavLinkDashboard />
    </LayoutContextProvider>,
    { wrapper: BrowserRouter }
  );
  const linkButton = screen.getByRole("link", { name: "Employee" });
  expect(linkButton).toHaveAttribute("href", "/employee");
});

test("User Link Button Direct to User page", () => {
  render(
    <LayoutContextProvider>
      <NavLinkDashboard />
    </LayoutContextProvider>,
    { wrapper: BrowserRouter }
  );
  const linkButton = screen.getByRole("link", { name: "User" });
  expect(linkButton).toHaveAttribute("href", "/user");
});

test("Products Link Button Direct to Product Page", () => {
  render(
    <LayoutContextProvider>
      <NavLinkDashboard />
    </LayoutContextProvider>,
    { wrapper: BrowserRouter }
  );
  const linkButton = screen.getByRole("link", { name: "Product" });
  expect(linkButton).toHaveAttribute("href", "/product");
});

test("POS Link Button Direct to POS page", () => {
  render(
    <LayoutContextProvider>
      <NavLinkDashboard />
    </LayoutContextProvider>,
    { wrapper: BrowserRouter }
  );
  const linkButton = screen.getByRole("link", { name: "POS" });
  expect(linkButton).toHaveAttribute("href", "/pos");
});

test("Sales Link Button Direct to Sales page", () => {
  render(
    <LayoutContextProvider>
      <NavLinkDashboard />
    </LayoutContextProvider>,
    { wrapper: BrowserRouter }
  );
  const linkButton = screen.getByRole("link", { name: "Sale" });
  expect(linkButton).toHaveAttribute("href", "/sale");
});

test("Docs Link Button Direct to Docs page", () => {
  render(
    <LayoutContextProvider>
      <NavLinkDashboard />
    </LayoutContextProvider>,
    { wrapper: BrowserRouter }
  );
  const linkButton = screen.getByRole("link", { name: "Docs" });
  expect(linkButton).toHaveAttribute("href", "/docs");
});
