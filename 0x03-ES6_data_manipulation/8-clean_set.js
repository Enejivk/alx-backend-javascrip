const cleanSet = (set, sString) => {
  if (!sString || sString.length <= 0) {
    return ' ';
  }

  const unMatchString = [];
  for (const value of set) {
    if (value.startsWith(sString)) {
      unMatchString.push(value.slice(sString.length));
    }
  }

  return unMatchString.join('-');
}

export default cleanSet;
