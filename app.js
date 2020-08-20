//collection details: https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=[api-key]
//image : https://www.rijksmuseum.nl/api/nl/collection/SK-C-5/tiles?key=[api-key]
// API Key :qFel3792


const fetchData = async function () {
  let ranNum = Math.ceil(Math.random() * 498)
  console.log(ranNum)
//   function showimage()
// {
//     $("body").css("background-image","url('https://www.rijksmuseum.nl/api/en/collection/SK-A-${ranNum}?key=qFel3792')"); // Onclick of button the background image of body will be test here. Give the image path in url
//     $('#clickbutton').hide(); //This will hide the button specified in html
// }
  const url = `https://www.rijksmuseum.nl/api/en/collection/SK-A-${ranNum}?key=qFel3792`
  try {
    const response = await axios.get(url)
    // console.log(response)
    console.log(response.data)
    const artObject = response.data.artObject
    const artDescription = response.data.artObjectPage.plaqueDescription
    console.log(artObject)
    showArt(artObject, artDescription)
    removeArt()
    showImage()
  } catch (error) {
    console.log(`Error: ${error}`)
  } finally {
    console.log('More works by artist')
  }
}
function showArt(data, info) {
  let painting = data.webImage.url;
  let longTitle = data.longTitle;
  let description = info;
  console.log(painting)
  let artInfo = `
    <img id="painting" src="${painting}" alt="art" style="width: 500px; height: auto;">
    <h2 id="longTitle">${longTitle}</h2>
    <h2 id="description">${description}</h2>`
  document.querySelector('.art').insertAdjacentHTML('beforeend', artInfo)
}
  const button = document.getElementById('newArt')
button.addEventListener('click', fetchData)
  
function removeArt() {
   const remvoveDiv = document.getElementById('longTitle','painting','description')
   while (removeDiv.lastChild) {
     removeDiv.removeChild(removeDiv.lastChild)
   }
}
function showimage()
{
    $("body").css("landingArt","url('https://www.rijksmuseum.nl/api/en/collection/SK-A-${ranNum}?key=qFel3792')"); // Onclick of button the background image of body will be test here. Give the image path in url
    $('#clickbutton').hide(); //This will hide the button specified in html
}
// const landingImages = Array(
//   'https://lh5.ggpht.com/NNwpBd1GteTy1QVYsJH64dJh_eb8pORRD5AtB2tfrYRvvFlM5-07MakQOYmYo3h6-09spXyHfJZbjv6ODhPJiStHjQ=s0',
//   'https://lh3.googleusercontent.com/0G5nN9xiSRIj6SJ0fi2ifDbcDST3QOFafjVXUSPNb5hqnr_gF_DKJdO1QiGcQ97V3y9zon-n1GSGL3cRPORXE3UzDIsk=s0',
//   'https://lh3.googleusercontent.com/hW-VHwzu0W0pvuTVVnx2vSCnO__rILy0Auxqz8L4TWVC0VWWaxrSGRDqGIBqKdl5nIINoxOlkFtlTNQQdsP3eOOhXw=s0',
// );

// const fadeImg = setInterval(function() =>

  //   const artNum = (artObjects) => {
  //   let currentIndex = artObject.length;
  //   for (i = 0; i < artObjects.length; i++)
  //     artNum(data)
  // }
//        let data = Math.floor(Math.random() * currentIndex.length)
// const painting = data.artObject.links.web;
// const longTitle = data.artObject.longTitle;
// const 

//         const artNum = (artObjects) => {
//         let currentIndex = artObject.length;
//         for (i = 0; i < artObjects.length; i++)
//         let data = Math.floor(Math.random() * currentIndex.length)
//       artNum(data)

//         }


    // function showArt(data) {
    //   data.forEach(data => {
    //     let artInfo = `
    // <img id=${data.artObjects.objectNumber} src="${data.artObjects.webImage.url}" alt="painting" style="width: auto; height: auto;">
    // <h2 id="longTitle">${data.artObjects.longTitle}</h2>
    // <h2 `
    //     document.querySelector('.artwork').insertAdjacentHTML('beforeend', artInfo)
    //   })
    // }
    // const button = document.querySelector('artwork')
    // button.addEventListener('click', fetchData) => {
    //   const inputValue = document.querySelector('input').value
    //   console.log(inputValue)
    //   document.querySelector('input').value = ''
    //   fetchData(inputValue)
    // })
      // const submit = document.querySelector('#artwork')
    // submit.addEventListener('click', () => {
    //   const inputValue = document.querySelector('input').value
    //   console.log(inputValue)
    //   document.querySelector('input').value = ''
    //   fetchData(inputValue)
    // })