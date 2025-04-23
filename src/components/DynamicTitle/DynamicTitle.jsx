import { useLocation, useMatches } from "react-router";
import { useEffect } from "react";

const DynamicTitle = () => {
  const location = useLocation();
  const matches = useMatches();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/bookings") {
      document.title = "My Bookings";
    } else if (path.startsWith("/lawyer/")) {
      const lawyerMatch = matches.find(match => match.pathname.includes("/lawyer/") && match.data);
      if (lawyerMatch?.data?.name) {
        document.title = lawyerMatch.data.name;
      } else {
        document.title = "Lawyer Details";
      }
    } else if (path === "/blogs") {
      document.title = "Blogs";
    } else {
      document.title = "Law.BD";
    }
  }, [location, matches]);

  return null;
};

export default DynamicTitle;
