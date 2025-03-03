import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);

      setIsMobile(isMobileDevice);
    };

    checkMobile();
  }, []);

  return isMobile;
};

export default useIsMobile;
