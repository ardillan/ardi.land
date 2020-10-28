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

export const formatDateTime = (commitTime) => {
  return new Date(commitTime).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  })
}

export const shuffleArray = (array) => array.sort(() => Math.random() - 0.5)

export const slugify = (str) => {
  var map = {
    "-": " ",
    "-": "_",
    a: "á|à|ã|â|À|Á|Ã|Â",
    e: "é|è|ê|É|È|Ê",
    i: "í|ì|î|Í|Ì|Î",
    o: "ó|ò|ô|õ|Ó|Ò|Ô|Õ",
    u: "ú|ù|û|ü|Ú|Ù|Û|Ü",
    c: "ç|Ç",
    n: "ñ|Ñ",
  }

  for (var pattern in map) {
    str = str.replace(new RegExp(map[pattern], "g"), pattern)
  }

  return str
}
