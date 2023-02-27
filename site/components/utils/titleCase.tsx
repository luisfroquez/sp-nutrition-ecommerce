const titleCase = (text: string) =>
  text
    ?.split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
    .join(' ')

export default titleCase
