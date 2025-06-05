import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    error: null
  });

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocation((loc) => ({ ...loc, error: "Geolocation not supported" }));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      (error) => {
        setLocation((loc) => ({ ...loc, error: error.message }));
      }
    );
  }, []);

  return location;
}
