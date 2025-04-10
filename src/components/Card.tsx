import React from "react";

type CardProps = {
  children: React.ReactNode;
  imageUrl: string;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  children,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={`card group hover:bg-secondBackground relative transform cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${className} `}
    >
      <img
        src={imageUrl}
        alt="project image"
        className="min-h-64 w-full object-cover"
      />
      <div className="child bg-background absolute top-0 left-0 -z-10 flex h-0 items-center justify-center p-0 transition-all duration-300 group-hover:z-10 group-hover:h-full group-hover:w-full group-hover:p-4">
        {children}
      </div>
    </div>
  );
};

type CardContentProps = {
  children: React.ReactNode;
};

export const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <div className="text-white">{children}</div>;
};
