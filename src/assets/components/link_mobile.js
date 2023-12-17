function LinkMobile(item) {
  return (
    <a
      key={item.name}
      href={item.href}
      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    >
      {item.name}
    </a>
  );
}

export default LinkMobile;
