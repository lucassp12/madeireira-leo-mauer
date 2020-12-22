import React, { useRef } from "react";
import Header from "../Header";
import Footer from "../Footer";

function Page({ children }) {
  const contactRef = useRef(null);

  const handleClickContact = () =>
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <>
      <Header handleClickContact={handleClickContact} />
      {children}
      <Footer contactRef={contactRef} />
    </>
  );
}

export default Page;
