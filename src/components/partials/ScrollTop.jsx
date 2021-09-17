import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll to top of the page on new route navigation.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export default ScrollTop;
