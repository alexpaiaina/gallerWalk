//collection details: https://www.rijksmuseum.nl/api/nl/collection/SK-C-5?key=[api-key]
//image : https://www.rijksmuseum.nl/api/nl/collection/SK-C-5/tiles?key=[api-key]
// API Key :qFel3792


const fetchData = async function () {
  remLandArt()
  let ranNum = Math.ceil(Math.random() * 498)
  console.log(ranNum)
  const url = `https://www.rijksmuseum.nl/api/en/collection/SK-A-${ranNum}?key=qFel3792`
  try {
    const response = await axios.get(url)
    // console.log(response)
    console.log(response.data)
    const artObject = response.data.artObject
    // const artDescription = response.data.artObjectPage.plaqueDescription
    console.log(artObject)
    showArt(artObject)
    showImage()
  } catch (error) {
    console.log(`Error: ${error}`)
  } finally {
    console.log('More works by artist')
  }
}
// let images = Array()
// images[0] = "https://lh5.ggpht.com/NNwpBd1GteTy1QVYsJH64dJh_eb8pORRD5AtB2tfrYRvvFlM5-07MakQOYmYo3h6-09spXyHfJZbjv6ODhPJiStHjQ=s0";
// images[1] = "https://lh3.googleusercontent.com/0G5nN9xiSRIj6SJ0fi2ifDbcDST3QOFafjVXUSPNb5hqnr_gF_DKJdO1QiGcQ97V3y9zon-n1GSGL3cRPORXE3UzDIsk=s0";
// images[2] = "https://lh3.googleusercontent.com/hW-VHwzu0W0pvuTVVnx2vSCnO__rILy0Auxqz8L4TWVC0VWWaxrSGRDqGIBqKdl5nIINoxOlkFtlTNQQdsP3eOOhXw=s0";
// images[3] = "https://lh5.ggpht.com/4ssVhcgSTDVnsOS8Cqcdm0OZyvoctb1sJjCdqX3Kw3H7PHFff0zj1nUDl7ZpWR95HG8JiHK_agpbOMwHTnP0A3IIqA=s0";
// setInterval("changeImage()", 7300);
// let x=0;

// function changeImage()
// {
// document.getElementById("landArt1").src=imgs[x]
// x++;
// }
// setInterval(() => {
//   rotate()
// }, 7200)
  
function showArt(data) {
  document.querySelector('.art').innerHTML = ''
  let painting = data.webImage.url;
  let longTitle = data.longTitle;
  let materials = data.materials;
  console.log(painting)
  let artInfo = `
    <img id="painting" src="${painting}" alt="art" style="width: 500px; height: auto;">
    <h2 id="longTitle">${longTitle}</h2>
    <h2 id="materials">${materials}</h2>`
  document.querySelector('.art').insertAdjacentHTML('beforeend', artInfo)
}
  
function remLandArt() {
  let remArt = document.getElementById("slider");
  remArt.remove();
}
  const button = document.getElementById('newArt')
  button.addEventListener('click', fetchData)



  
// const landingImages = Array(
//   'https://lh5.ggpht.com/NNwpBd1GteTy1QVYsJH64dJh_eb8pORRD5AtB2tfrYRvvFlM5-07MakQOYmYo3h6-09spXyHfJZbjv6ODhPJiStHjQ=s0',
//   'https://lh3.googleusercontent.com/0G5nN9xiSRIj6SJ0fi2ifDbcDST3QOFafjVXUSPNb5hqnr_gF_DKJdO1QiGcQ97V3y9zon-n1GSGL3cRPORXE3UzDIsk=s0',
//   'https://lh3.googleusercontent.com/hW-VHwzu0W0pvuTVVnx2vSCnO__rILy0Auxqz8L4TWVC0VWWaxrSGRDqGIBqKdl5nIINoxOlkFtlTNQQdsP3eOOhXw=s0',
//   'https://lh5.ggpht.com/4ssVhcgSTDVnsOS8Cqcdm0OZyvoctb1sJjCdqX3Kw3H7PHFff0zj1nUDl7ZpWR95HG8JiHK_agpbOMwHTnP0A3IIqA=s0',
//   };
//   const setBackground = (image) => {
//     document.body.style.background = "url('IMAGE_URLS')";
//     setInterval(() => {
      
//     }, interval);
//     const turnPage = () => {
//       for (let i = 0; i < landingImages.length; i++)
//         document.getElementById("landingArt").src = images[i];
//     }

//     const turnBack = () => {
//       i = (i <= 0) ? landingImages.length - 1 : x - 1;
//       document.getElementById("img").src = images[x];
//     }

//     const timer = () => {
//       setInterval(displayNextImage, 3000);
//   }

  // let landingArt = [], x = -1;
  // landingArt[0] = 'https://lh5.ggpht.com/NNwpBd1GteTy1QVYsJH64dJh_eb8pORRD5AtB2tfrYRvvFlM5-07MakQOYmYo3h6-09spXyHfJZbjv6ODhPJiStHjQ=s0';
  // landingArt[1] = 'https://lh3.googleusercontent.com/0G5nN9xiSRIj6SJ0fi2ifDbcDST3QOFafjVXUSPNb5hqnr_gF_DKJdO1QiGcQ97V3y9zon-n1GSGL3cRPORXE3UzDIsk=s0';
  // landingArt[2] = 'https://lh3.googleusercontent.com/hW-VHwzu0W0pvuTVVnx2vSCnO__rILy0Auxqz8L4TWVC0VWWaxrSGRDqGIBqKdl5nIINoxOlkFtlTNQQdsP3eOOhXw=s0';
  // landingArt[3] = 'https://lh5.ggpht.com/4ssVhcgSTDVnsOS8Cqcdm0OZyvoctb1sJjCdqX3Kw3H7PHFff0zj1nUDl7ZpWR95HG8JiHK_agpbOMwHTnP0A3IIqA=s0';
// const fadeImg = setInterval(function () {
//   for (let i = 0; i < landingImages.length; i++)
//   const fadeImg = window.setInterval(picLoop, 3000);
//     const landingImages =
//     document.getElementById('.pic1')
//     document.getElementById('.pic2')
//     document.getElementById('.pic3')
//     document.getElementById('.pic4')
// function picLoop(landingImages) {
//   for (let i = 0; i < landingImages.length; i++)
//   console.log(landingImages);
  // console.log('pic2');
  // console.log('')

        

      // const submit = document.querySelector('#artwork')
    // submit.addEventListener('click', () => {
    //   const inputValue = document.querySelector('input').value
    //   console.log(inputValue)
    //   document.querySelector('input').value = ''
    //   fetchData(inputValue)
    // })