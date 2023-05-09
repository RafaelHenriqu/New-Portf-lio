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
    Html.style.backgroundImage = 'linear-gradient(to left, #191920, #0f21bc)'
}else
{   
    Html.style.backgroundImage = 'linear-gradient(to left, #02cfb2, #0f21bc)'
}