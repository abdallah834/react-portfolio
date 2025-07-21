import { useLocation } from "react-router";
import { useEffect } from "react";
export default function PageTitle({ title }) {
  const location = useLocation();
  useEffect(() => {
    document.title = title;
  }, [location, title]);
  return null;
}
