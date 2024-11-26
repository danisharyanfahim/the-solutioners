import { useMemo } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { DEVICES } from "../global/variables";

/* 
Media Query Parameters include:
-Aspect Ratio (Min/Max)
-Orientation (Landscape/Portrait)
-Width (Min / Max)
-Height (Min / Max)
-etc

For now I will just use standard device sizes for width, and that's it
*/

export const useMediaQueries = (): number => {
  const phone = useMediaQuery("(max-width: 30em)");
  const phablet = useMediaQuery("(max-width: 47em)");
  const tablet = useMediaQuery("(max-width: 60em)");
  const laptop = useMediaQuery("(max-width: 75em)");
  // const desktop = useMediaQuery("(min-width: 75em)");
  const device = useMemo((): number => {
    if (phone) {
      return DEVICES.PHONE.category;
    } else if (phablet) {
      return DEVICES.PHABLET.category;
    } else if (tablet) {
      return DEVICES.TABLET.category;
    } else if (laptop) {
      return DEVICES.LAPTOP.category;
    } else {
      return DEVICES.DESKTOP.category;
    }
  }, [phone, phablet, tablet, laptop]); //This code will be improved later on once I have a better understanding of typescript
  return device;
};
