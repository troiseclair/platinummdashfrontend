import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LayoutContextProvider from "../context/LayoutContext";
import AddUser from "../components/User/AddUser";
import { BrowserRouter as Router } from "react-router-dom";

const UserData = {
  id: "emp_0001",
  photo: "/images/blank_profile.png",
  fullname: "Sabrina Mawar",
  birthDate: "2001-01-01",
  gender: "Perempuan",
  phone: "8214321654",
  email: "sabrinamawar@gmail.com",
  hireDate: "2024-06-06",
  position: "Admin",
};

test("renders the AddUser form", () => {
  render(
    <LayoutContextProvider>
      <Router>
        <AddUser />
      </Router>
    </LayoutContextProvider>
  );

  expect(screen.getByLabelText(/Nama Lengkap/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Tanggal Lahir/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Gender/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Hire Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Position/i)).toBeInTheDocument();
});

test("Form Input Data", async () => {
  render(
    <LayoutContextProvider>
      <Router>
        <AddUser />
      </Router>
    </LayoutContextProvider>
  );
  /* Input Fullname */
  const inputFullname = await screen.getByLabelText("Nama Lengkap");
  fireEvent.change(inputFullname, {
    target: { value: UserData.fullname },
  });
  expect(inputFullname).toHaveValue(UserData.fullname);

  /* Input Birth Date */
  const inputBirthDate = await screen.getByLabelText("Tanggal Lahir");
  fireEvent.change(inputBirthDate, {
    target: { value: UserData.birthDate },
  });
  expect(inputBirthDate).toHaveValue(UserData.birthDate);

  /* Input Phone Number */
  const inputPhoneNumber = await screen.getByLabelText("Phone");
  fireEvent.change(inputPhoneNumber, {
    target: { value: UserData.phone },
  });
  expect(inputPhoneNumber).toHaveValue(parseInt(UserData.phone));

  /* Input Email */
  const inputEmail = await screen.getByLabelText("Email");
  fireEvent.change(inputEmail, {
    target: { value: UserData.email },
  });
  expect(inputEmail).toHaveValue(UserData.email);

  /* Input Hire Date */
  const inputHireDate = await screen.getByLabelText("Hire Date");
  fireEvent.change(inputHireDate, {
    target: { value: UserData.hireDate },
  });
  expect(inputHireDate).toHaveValue(UserData.hireDate);

  /* Input Position */
  const inputPosition = await screen.getByLabelText("Position");
  fireEvent.change(inputPosition, {
    target: { value: UserData.position },
  });
  expect(inputPosition).toHaveValue(UserData.position);
});
