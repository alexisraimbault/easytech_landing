import Image from "next/image";
import Link from "next/link";

export default function AppTile({ app, detail = "category" }) {
  const sub = detail === "tagline" && app.tagline ? app.tagline : app.category;
  return (
    <Link className="app-tile" href={app.href}>
      {app.icon ? (
        <Image src={app.icon} alt="" width={52} height={52} />
      ) : (
        <span className="ph" aria-hidden="true">{app.name.charAt(0)}</span>
      )}
      <span>
        <strong>{app.name}</strong>
        <small>{sub}</small>
      </span>
    </Link>
  );
}
