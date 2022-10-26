import React from "react";

type Props = {};

export const IconCategories = (props: Props) => {
  return (
    <svg
      className="h-5 w-5 text-black"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {" "}
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />{" "}
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />{" "}
      <line x1="6" y1="6" x2="6.01" y2="6" />{" "}
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  );
};
