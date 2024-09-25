import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-full flex flex-col justify-center items-center">
      <h1>Oops!</h1>
      <p>Lo sentimos, ha ocurrido un error</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}