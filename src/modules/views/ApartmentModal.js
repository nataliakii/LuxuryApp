// Assuming you are using fetch to load the JSON file
import InitialData from "../../InitialData";
import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PriceTable from "../components/PriceTable";

const fetchApartmentDataById = (apartmentId) => {
  const apartment = InitialData.find((apt) => apt.id === apartmentId);
  return apartment || null;
};

const ApartmentModal = ({ apartmentId, onClose }) => {
  const [apartment, setApartment] = useState(null);

  useEffect(() => {
    // Fetch apartment data when apartmentId changes
    const fetchedApartment = fetchApartmentDataById(apartmentId);
    setApartment(fetchedApartment);
  }, [apartmentId]);

  return (
    <div>
      <Dialog open={!!apartment} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle>{apartment ? apartment.longName : ""}</DialogTitle>
        <DialogContent>
          <ApartmentCard apartment={apartment} />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ApartmentModal;

const sectionHeadingStyle = {
  fontWeight: "bold",
  fontSize: 15,
  marginTop: 2,
  marginBottom: 2,
};

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: theme.spacing(3),
}));

const CarouselContainer = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  overflow: "hidden",
    maxHeight: "700px",
    width: "100%", // Add this line for responsiveness
}));

const ContentContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  overflow: "auto",
}));

const FacilityIconsContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  justifyContent: "center",
});

const FacilityIcon = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(1),
  display: "flex",
  alignItems: "center",
  fontSize: 10,
  flexDirection: "column",
}));

const IconImage = styled("img")({
  width: "24px",
  height: "24px",
  marginRight: "8px",
});

const ApartmentCard = ({ apartment }) => {

  return (
    <Root>
      <Paper elevation={3} component={CarouselContainer}>
        <Carousel showThumbs={false} dynamicHeight>
          {apartment.photos.map((photo, index) => {
            // Create a new Image object to get the image's dimensions
            const img = new Image();
            img.src = photo;

            // Define the maxWidth based on image dimensions
            let maxWidth = "400px"; // Default maxWidth for larger images
            if (img.width && img.height) {
              if (img.width <= 300 || img.height <= 300) {
                maxWidth = "200px"; // If dimensions are smaller
              }
            }

            return (
              <div key={index}>
                <img
                  src={photo}
                  alt={`Apartment ${apartment.name}`}
                  style={{ width: "100%", maxWidth, height: "auto" }}
                />
              </div>
            );
          })}
        </Carousel>
      </Paper>
      <Grid container component={ContentContainer}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" sx={{ fontSize: 15 }}>
            {apartment.desc.en}
                  </Typography>
                  <FacilityIcon sx={{ mt:3, }}>
            <IconImage src="/facility-icons/size.png" alt="size" />
            Size - {apartment.size} m2
          </FacilityIcon>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={sectionHeadingStyle}>
            Room Facilities:
                  </Typography>{ " " }
                  
                  <FacilityIconsContainer>
                      
            {apartment.kitchen && (
              <FacilityIcon>
                <IconImage src="/facility-icons/kitchen.png" alt="Kitchen" />
                Kitchen
              </FacilityIcon>
            )}
            {apartment.private_bathroom && (
              <FacilityIcon>
                <IconImage src="/facility-icons/bath.png" alt="Bathroom" />
                Private Bathroom
              </FacilityIcon>
            )}
            {apartment.air_conditioning && (
              <FacilityIcon>
                <IconImage
                  src="/facility-icons/air-conditioning.png"
                  alt="air_conditionin"
                />
                Air-condition
              </FacilityIcon>
            )}
            {apartment.seaview && (
              <FacilityIcon>
                <IconImage src="/facility-icons/seaview.png" alt="Seaview" />
                Seaview
              </FacilityIcon>
            )}
            {apartment.gardenview && (
              <FacilityIcon>
                <IconImage
                  src="/facility-icons/gardenview.png"
                  alt="gardenview"
                />
                Garden view
              </FacilityIcon>
            )}
            {apartment.cityview && (
              <FacilityIcon>
                <IconImage src="/facility-icons/cityview.png" alt="cityview" />
                City view
              </FacilityIcon>
            )}
            {apartment.flat_screen_tv && (
              <FacilityIcon>
                <IconImage src="/facility-icons/tv.png" alt="tv" />
                Flat-screen TV
              </FacilityIcon>
            )}
            {apartment.extra_large_double_beds && (
              <FacilityIcon>
                <IconImage
                  src="/facility-icons/large_bed.png"
                  alt="large-bed"
                />
                {apartment.extra_large_double_beds} extra large double-bed
              </FacilityIcon>
            )}
            {apartment.double_beds && (
              <FacilityIcon>
                <IconImage
                  src="/facility-icons/double_bed.png"
                  alt="double-bed"
                />
                {apartment.double_beds} double-bed
              </FacilityIcon>
            )}
            {apartment.single_bed && (
              <FacilityIcon>
                <IconImage
                  src="/facility-icons/single_bed.png"
                  alt="single-bed"
                />
                {apartment.single_beds} single bed
              </FacilityIcon>
            )}
          </FacilityIconsContainer>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={sectionHeadingStyle}>
            Outdoor Facilities:
          </Typography>

          {apartment.balcony && (
            <FacilityIcon>
              <IconImage src="/facility-icons/balcony.png" alt="balcony" />
              Balcony
            </FacilityIcon>
          )}
          {apartment.terrace && (
            <FacilityIcon>
              <IconImage src="/facility-icons/terrace.png" alt="terrace" />
              Terrace
            </FacilityIcon>
          )}
        </Grid>
        <Typography variant="subtitle1" sx={sectionHeadingStyle}>
          Price:
        </Typography>
        <PriceTable prices={apartment.price} />
      </Grid>
    </Root>
  );
};
