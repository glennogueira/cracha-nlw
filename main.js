const linksSocialMedia = {
  github: 'glennogueira',
  youtube: 'channel/UCKWQiya7TD_lbfhyD1zcU8w',
  instagram: 'glennogueira',
  facebook: 'glencharlie',
  twitter: 'GlenNogueira'  
}

function changeSocialMediaLinks() {
   for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    
    // userName.textContent = "Glenderson Nogueira"
   }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  
  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userBio.textContent = data.bio
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login    
  }) 

}
 getGitHubProfileInfos()


