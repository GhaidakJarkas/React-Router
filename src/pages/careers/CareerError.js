import { Link, useRouteError } from "react-router-dom"

export default function CareerError() {

  const error = useRouteError();
  return (
    <div className="career-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to homepage</Link>
    </div>
  )
}
