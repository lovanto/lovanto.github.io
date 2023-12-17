const active = "text-sm font-bold leading-6 text-gray-900";
const notActive = "text-sm font-normal leading-6 text-gray-900";
const path = window.location.pathname;

function Link(item) {
  const isActive = path === item.href ? active : notActive;
  return (
    <a key={item.name} href={item.href} className={isActive}>
      {item.name}
    </a>
  );
}

export default Link;
