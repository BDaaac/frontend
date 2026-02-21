import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <h1>404 — Page Not Found</h1>
      <Link to="/">Go Home</Link>
    </>
  );
}

export default NotFound;