import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../pages/Login";
import LayoutContextProvider from "../context/LayoutContext";
import { BrowserRouter as Router } from "react-router-dom";

test("Render Login + test input username", async () => {
  render(
    <LayoutContextProvider>
      <Router>
        <Login />
      </Router>
    </LayoutContextProvider>
  );
  const input = await screen.getByLabelText("Username");
  fireEvent.change(input, {
    target: { value: "sabrina123" },
  });
  expect(input).toHaveValue("sabrina123");
});

test("Render Login + test input password", async () => {
  render(
    <LayoutContextProvider>
      <Router>
        <Login />
      </Router>
    </LayoutContextProvider>
  );
  const input = await screen.getByLabelText("Password");
  fireEvent.change(input, {
    target: { value: "Admin123" },
  });
  expect(input).toHaveValue("Admin123");
});

test("Button Login + send to /dashboard", async () => {
  render(
    <LayoutContextProvider>
      <Router>
        <Login />
      </Router>
    </LayoutContextProvider>
  );
  const button = screen.getByRole("button", { name: "Login" });
  expect(button).toBeInTheDocument();
});

test("Button Home + send to /", async () => {
  render(
    <LayoutContextProvider>
      <Router>
        <Login />
      </Router>
    </LayoutContextProvider>
  );
  const returnLink = screen.getByTestId("btn-home");
  expect(returnLink).toHaveAttribute("href", "/");
});
