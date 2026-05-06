function SosMedIcon({ link, source, name }) {
  return (
    <div className="bg-gray-50 rounded-full">
      <a href={link} target="_blank" rel="noreferrer">
        <img className="h-10 w-10 ring-0" src={source} alt={name} />
      </a>
    </div>
  );
}

export default SosMedIcon;
