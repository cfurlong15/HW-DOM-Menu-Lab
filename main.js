const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  const mainEl = document.querySelector("main")
  mainEl.style.backgroundColor = "#4a4e4d"
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
  mainEl.classList.add("class", "flex-ctr")
  
  const topMenuEl = document.getElementById('top-menu')
  topMenuEl.style.height = '100%'
  topMenuEl.style.backgroundColor = "#0e9aa7"
  topMenuEl.classList.add('flex-around')
  
  menuLinks.forEach(function (menuLink) {
    const newLink = document.createElement("a");
    newLink.innterText = menuLink.text;
    newLink.setAttribute("href", menuLink);
    console.log(newLink);
    topMenuEl.appendChild(newLink); 
    console.log(menuLinks);
  });