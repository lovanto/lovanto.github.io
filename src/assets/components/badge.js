function Badge({ text }) {
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
      {text}
    </span>
  );
}

export default Badge;
