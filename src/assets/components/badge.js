import { Chip } from "@material-tailwind/react";

function Badge({ text }) {
  return <Chip color="blue" value={text} className="bg-blue-100 text-blue-800" />;
}

export default Badge;
