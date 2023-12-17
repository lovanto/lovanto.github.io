const active = "-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-gray-900 hover:bg-gray-50";
const notActive = "-mx-3 block rounded-lg px-3 py-2 text-base font-normal leading-7 text-gray-900 hover:bg-gray-50";
const path = window.location.pathname;

function LinkMobile(item) {
  const isActive = path === item.href ? active : notActive;
  return (
    <a key={item.name} href={item.href} className={isActive}>
      {item.name}
    </a>
  );
}

export default LinkMobile;
