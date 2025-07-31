import React from "react";

const Logo = () => {
  return (
    <svg width="25" height="25" viewBox="0 0 64 64" fill="none">
  <rect width="25" height="25" rx="12" fill="none"/>
  <g stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    
    <path d="M20 22H44C45.1 22 46 22.9 46 24V48C46 49.1 45.1 50 44 50H20C18.9 50 18 49.1 18 48V24C18 22.9 18.9 22 20 22Z" fill="none"/>
    
    <path d="M24 22V18C24 15.8 25.8 14 28 14C30.2 14 32 15.8 32 18V22"/>
    <path d="M40 22V18C40 15.8 38.2 14 36 14C33.8 14 32 15.8 32 18V22"/>
    
    <path d="M28 34 L24 38 L28 42" />
    <path d="M36 34 L40 38 L36 42" />
    
    <circle cx="32" cy="38" r="1.5" fill="#888888" />
  </g>
</svg>

  );
};

export default Logo;
