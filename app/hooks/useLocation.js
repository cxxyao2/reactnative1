import { useEffect, useState } from 'react';
import * as Location from 'expo-location';


export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    const { granted } = await Location.requestPermissionsAsync();
    if (!granted) return;

    try {
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // more precise but use more time, Location.getCurrentPositionAsync() ;
      setLocation({ latitude, longitude });
      console.log("latitude, longitude ", latitude, longitude);
    } catch (error) {
      console.log("location error is ", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);


  return location;
};