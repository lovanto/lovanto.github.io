function BadgeCollaborator({ text, url }) {
  return (
    <a href="url">
      <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-3.5 py-1.5 rounded-full dark:bg-gray-700 dark:text-gray-300">
        {text}
      </span>
    </a>
  );
}

export default BadgeCollaborator;
