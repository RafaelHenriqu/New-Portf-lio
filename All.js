let Html = document.querySelector('html')
function All()
{
 
if (localStorage.Tema == 'Black')
{
    Html.style.backgroundImage = 'linear-gradient(to left, #02cfb2, #0f21bc)'
localStorage.Tema = 'White'
}else
{
    Html.style.backgroundImage = 'linear-gradient(to left, #191920, #0f21bc)'
    localStorage.Tema = 'Black'
}
}

if (localStorage.Tema == 'Black')
{ 
    let Perfil = document.getElementById('Perfil')
    Html.style.backgroundImage = 'linear-gradient(to left, #191920, #0f21bc)'
    Perfil.style.backgroundImage = 'url(img/RinOkumura.gif)'
    Perfil.style.border = '2px solid blue'
    Perfil.style.boxShadow = '0px 0px 50px blue'
}else
{   
    Html.style.backgroundImage = 'linear-gradient(to left, #02cfb2, #0f21bc)'
}
