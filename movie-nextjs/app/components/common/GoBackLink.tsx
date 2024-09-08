import Link from "next/link";
import { FC } from "react";

const GoBackLink: FC = () => {
  return (
    <Link href="/movies">
      <p className="ml-6 w-36 flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2 -ml-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M15 19l-7-7 7-7" />
        </svg>
        <span>Go Back</span>
      </p>
    </Link>
  );
};

export default GoBackLink;
