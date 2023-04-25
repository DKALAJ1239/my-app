import axios from "axios";

const API_KEY = "YOUR_API_KEY";

const getStreetViewUrl = (lat, lng) => {
  const size = "640x480";
  const heading = "151.78";
  const pitch = "-0.76";
  const url = `https://maps.googleapis.com/maps/api/streetview?size=${size}&location=${lat},${lng}&heading=${heading}&pitch=${pitch}&key=${API_KEY}`;
  return url;
};

const getStreetViewImage = async (lat, lng) => {
  const url = getStreetViewUrl(lat, lng);
  const response = await axios.get(url);
  return response.data;
};

// Example usage:
const lat = 37.7749;
const lng = -122.4194;

getStreetViewImage(lat, lng)
  .then((data) => {
    console.log(data);
    // Do something with the street view image data
  })
  .catch((error) => {
    console.error(error);
  });
