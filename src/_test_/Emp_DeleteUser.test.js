import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LayoutContextProvider from "../context/LayoutContext";
import DeleteUser from "../components/User/DeleteUser";
import { BrowserRouter as Router } from "react-router-dom";

test("Delete Text", () => {
  render(
    <LayoutContextProvider>
      <Router>
        <DeleteUser />
      </Router>
    </LayoutContextProvider>
  );

  expect(screen.getByText("Hapus Data Karyawan")).toBeInTheDocument();
  expect(
    screen.getByText(/Apakah Anda Ingin Menghapus Data Karyawan Dengan ID/i)
  ).toBeInTheDocument();
});

test("Delete Button", () => {
  render(
    <LayoutContextProvider>
      <Router>
        <DeleteUser />
      </Router>
    </LayoutContextProvider>
  );
  const button = screen.getByRole("button", { name: "Delete" });
  expect(button).toBeInTheDocument();
  const linkButton = screen.getByRole("link", { name: "Batal" });
  expect(linkButton).toHaveAttribute("href", "/User");
});
