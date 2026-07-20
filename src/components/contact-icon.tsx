type ContactIconProps = {
  name:
    | "phone"
    | "email"
    | "location"
    | "delivery"
    | "globe"
    | "whatsapp";
  className?: string;
};

export function ContactIcon({
  name,
  className = "h-5 w-5",
}: ContactIconProps) {
  const paths = {
    phone: (
      <path d="M7.1 3.5 9.4 7c.3.5.2 1.1-.2 1.5l-1.6 1.6a15.4 15.4 0 0 0 6.3 6.3l1.6-1.6c.4-.4 1-.5 1.5-.2l3.5 2.3c.5.3.7.9.5 1.5l-.8 2.1c-.2.6-.8 1-1.5 1C9.8 21.5 2.5 14.2 2.5 5.3c0-.7.4-1.3 1-1.5L5.6 3c.6-.2 1.2 0 1.5.5Z" />
    ),
    email: (
      <>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="m3.5 6 8.5 7 8.5-7" />
      </>
    ),
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    delivery: (
      <>
        <path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
        <path d="M8.2 7.7c.3-.3.7-.3 1-.1l1.2 1.7c.2.3.2.7-.1 1l-.7.7c.7 1.5 1.8 2.6 3.3 3.3l.7-.7c.3-.3.7-.3 1-.1l1.7 1.2c.3.2.3.7.1 1-.6.7-1.4 1-2.2.9-3.7-.6-6.7-3.5-7.2-7.2-.1-.7.3-1.5 1.2-1.7Z" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={`${className} shrink-0 fill-none stroke-current`}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
