const convertToPath = (text: string[]) => {
  let path = '';
  text.forEach((item) => {
    path += `/${item.split(' ').join('-').toLocaleLowerCase()}`;
  });
  return path;
};

export default convertToPath;
