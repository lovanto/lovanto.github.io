function SosMedIcon({ link, source, name }) {
  return (
    <div className="bg-white rounded-full">
      <a href={link}>
        <img className="h-10 w-10 ring-0" src={source} alt={name} />
      </a>
    </div>
  );
}

export default SosMedIcon;
