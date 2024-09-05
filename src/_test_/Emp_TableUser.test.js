import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableUser from "../components/User/TableUser";
import LayoutContextProvider from "../context/LayoutContext";
import { BrowserRouter as Router } from "react-router-dom";

test("Table User", () => {
  render(
    <LayoutContextProvider>
      <Router>
        <TableUser />
      </Router>
    </LayoutContextProvider>
  );

  const theadId = screen.getByText("ID");
  expect(theadId).toBeInTheDocument();
  const theadPhoto = screen.getByText("Photo");
  expect(theadPhoto).toBeInTheDocument();
  const theadName = screen.getByText("Nama");
  expect(theadName).toBeInTheDocument();
  const theadBirthDate = screen.getByText("Tanggal_Lahir");
  expect(theadBirthDate).toBeInTheDocument();
  const theadGender = screen.getByTestId("th-gender");
  expect(theadGender).toBeInTheDocument();
  const theadPhone = screen.getByTestId("th-phone");
  expect(theadPhone).toBeInTheDocument();
  const theadEmail = screen.getByTestId("th-email");
  expect(theadEmail).toBeInTheDocument();
  const theadHireDate = screen.getByTestId("th-hire");
  expect(theadHireDate).toBeInTheDocument();
  const theadPosition = screen.getByTestId("th-position");
  expect(theadPosition).toBeInTheDocument();
  const theadAction = screen.getByTestId("th-action");
  expect(theadAction).toBeInTheDocument();
});
