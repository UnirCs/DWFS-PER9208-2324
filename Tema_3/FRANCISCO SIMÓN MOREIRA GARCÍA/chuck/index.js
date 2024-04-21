function getChiste()
{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud');
      }
      return response.json();
    })
    .then(data => {
    
    setChiste(data.value)
      
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
}

function setChiste(chiste)
{
    document.getElementById("cntChiste").innerHTML=chiste
}