const fetchData = async function () {
  remLandArt()
  let ranNum = Math.ceil(Math.random() * 498)
  console.log(ranNum)
  const url = `https://www.rijksmuseum.nl/api/en/collection/SK-A-${ranNum}?key=qFel3792`
  try {
    const response = await axios.get(url)
    console.log(response.data)
    const artObject = response.data.artObject
    showArt(artObject)
  } catch (error) {
    console.log(`Error: ${error}`)
  } finally {
    console.log('More works by artist')
  }
}
  
function showArt(data) {
  document.querySelector('.art').innerHTML = ''
  let painting = data.webImage.url;
  let longTitle = data.longTitle;
  let materials = data.materials;
  let artInfo = `
    <img id="painting" src="${painting}" alt="art" style="width: 500px; height: auto;">
    <h2 id="longTitle">${longTitle}</h2>
    <h2 id="materials">${materials}</h2>`
  document.querySelector('.art').insertAdjacentHTML('beforeend', artInfo)
}
  
function remLandArt() {
  let remArt = document.getElementById('slider');
  if (remArt) {
    remArt.remove();
  }
}
  const button = document.getElementById('newArt')
  button.addEventListener('click', fetchData)