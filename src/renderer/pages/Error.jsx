import React from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleTryAgain = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {error?.message || "An unexpected error occurred."}
          </AlertDescription>
        </Alert>

        <div className="text-center">
          <h1 className="mt-6 text-3xl font-extrabold dark:text-gray-100">
            Oops! Something went wrong
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don&apos;t worry, we&apos;re on it. In the meantime, you can try the
            following:
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button onClick={handleTryAgain} className="w-full">
            Try again
          </Button>
          <Button
            onClick={handleGoHome}
            variant="outline"
            className="w-full text-black hover:bg-gray-100"
          >
            Go back to homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
