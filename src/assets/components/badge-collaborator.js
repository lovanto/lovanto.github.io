function BadgeCollaborator({ text, url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="inline-block">
      <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors normal-case">
        {text}
      </span>
    </a>
  );
}

export default BadgeCollaborator;
