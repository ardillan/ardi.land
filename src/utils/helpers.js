export const getAge = () => {
  let birthDay = new Date("Aug 23 1988 14:00:00 GMT+0200 (CEST)")
  let today = new Date()
  let ageDate = new Date(today - birthDay)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

export const formatDate = (postDate) => {
  return new Date(postDate).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
