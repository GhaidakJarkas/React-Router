import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found, 404</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sequi aliquam, distinctio dolores laborum porro quaerat unde sed fugit nulla enim corrupti qui cumque a maxime ipsam eveniet! Quisquam, quaerat?</p>
      <p>Go back to <Link to="/">homepage</Link>.</p>
    </div>
  )
}
