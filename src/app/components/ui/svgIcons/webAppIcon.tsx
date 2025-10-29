import React from "react";

const WebAppIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.1"
      stroke="currentColor"
      className="size-15 bg-blue-500 p-2 text-white rounded-xl"
    >
      <rect x="3" y="4" width="18" height="12" rx="1.5" stroke="currentColor" />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 8h18M7 16h2m3 0h2m3 0h2"
      />
    </svg>
  );
};

export default WebAppIcon;
