/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Box from "@mui/material/Box";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import Contacts from "./Contacts";
import ProductHeroLayout from "./ProductHeroLayout";
import Typography from "../components/Typography";
import Button from "../components/Button";

const backgroundImage = "/b2.jpg";

export default function ProductHero() {
  const { t, i18n } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleOnClickContact = () => {
    scroller.scrollTo("contacts", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };
  const handleOnClickApartments = () => {
    scroller.scrollTo("apartments", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="s luxury princess suite"
      />
      <Typography
        color="primary.dark"
        align="center"
        variant="h4"
        marked="center"
      >
        {t("productHero.slogan1")}
      </Typography>
      <Typography
        color="secondary.dark"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        {t("productHero.slogan2")}
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={handleOnClickContact}
        sx={{ minWidth: 200 }}
      >
        {t("productHero.button")}
      </Button>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        onClick={handleOnClickApartments}
        sx={{ minWidth: 200, my: 2 }}
      >
        Explore apartments
      </Button>

      {/* {isModalOpen && (
        <ContactsModal open={isModalOpen} onClose={closeModal} t={t} />
      )} */}
    </ProductHeroLayout>
  );
}

// function ContactsModal({ open, onClose, t }) {
//   if (!open) return null;

//   const modalStyles = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.5)",
//     zIndex: 9999,
//   };

//   const contentStyles = {
//     backgroundColor: "#fff",
//     padding: "0px",
//     maxWidth: "100%",
//     maxHeight: "100%",
//     overflowY: "auto",
//   };

//   return (
//     <Box style={modalStyles} onClick={onClose}>
//       <Box style={contentStyles}>
//         <Contacts />
//         <Button onClick={onClose} color="primary">
//           {t("apModal.close")}
//         </Button>
//       </Box>
//     </Box>
//   );
// }
