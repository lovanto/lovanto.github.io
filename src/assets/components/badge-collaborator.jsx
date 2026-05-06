import { Chip } from "@material-tailwind/react";

function BadgeCollaborator({ text, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Chip variant="ghost" value={text} className="bg-gray-100 text-gray-800 normal-case" />
    </a>
  );
}

export default BadgeCollaborator;
