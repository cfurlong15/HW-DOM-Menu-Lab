const menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
  
// Task 1
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add("flex-ctr");

// Task 2
const topMenuEl = document.getElementById("top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Task 3
for (let linkObj of menuLinks) {
  let navLinkEl = document.createElement("a");
  navLinkEl.setAttribute("href", linkObj.href);
  navLinkEl.textContent = linkObj.text;
  topMenuEl.appendChild(navLinkEl);
}

// Task 4
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Task 5
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  let currentTarget = event.target;
  if (currentTarget.tagName !== "A") {
    return;
  }

  if (currentTarget.classList.contains("active")) {
    currentTarget.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }

  topMenuLinks.forEach(function(linkEl){
    linkEl.classList.remove('active')
  })

  currentTarget.classList.add('active')

  let currentLink = menuLinks.find(function(linkObj){
    return linkObj.text === currentTarget.textContent
  })

  if(currentLink.subLinks){
    showingSubMenu = true
  } else {
    showingSubMenu = false
  }

  if (showingSubMenu){
    buildSubMenu(currentLink.subLinks)
    subMenuEl.style.top = '100%'
  } else {
    subMenuEl.style.top = "0";
    mainEl.innerHTML  = '<h1>About!</h1>'
  }

  function buildSubMenu(linksArr){
    console.log(linksArr)
    subMenuEl.innerHTML = ""
    for(let linkObj of linksArr){
      const newLink = document.createElement('a')
      newLink.setAttribute('href', linkObj.href )
      newLink.textContent = linkObj.text
      subMenuEl.appendChild(newLink)
    }

  }
});

// Task 6
subMenuEl.addEventListener('click', function(event){
  event.preventDefault()

  let currentTarget = event.target;
  if (currentTarget.tagName !== "A") {
    return;
  }

  showingSubMenu = false
  subMenuEl.style.top = "0"

  topMenuLinks.forEach(function(linkEl){
    linkEl.classList.remove('active')
  })
  let pageName = currentTarget.textContent
  let pageContent = pageName[0].toUpperCase()+pageName.slice(1)
  mainEl.innerHTML = `<h1>${pageContent}!</h1>`
})