// import { ReactNode } from "react";
// import en from "../../lang/en.json";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";

// import Navbar from "./Navbar";
// import { IntlProvider } from "react-intl";

// const AllTheProviders = ({children}: {children: ReactNode}) => {
//   return (
//     <IntlProvider locale="en" messages={en}>
//       {children}
//     </IntlProvider>
//   )
// }

// describe("Navbar tests", () => {
//   test.only("Should render navbar", () => {
//     // All the providers
//     render(<Navbar />, {
//       wrapper: AllTheProviders
//     });
//     //const navLinks = screen.getAllByRole("navigation")
//     const contactButton = screen.getByText(/contact us/i);
//     expect(contactButton).toBeInTheDocument();
//   });
// });
