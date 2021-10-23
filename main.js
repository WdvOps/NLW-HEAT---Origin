
const socialMediasLinks = {
    github: 'WdvOps',
    linkedin: 'will-freittas',
    instagram: 'afreittaswill',
    facebook: 'william.freittas.54'
};

function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class');

        li.children[0].href = `https://${social}.com/${socialMediasLinks[social]}`

    }
}
changeSocialMediaLinks();

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${socialMediasLinks.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            bioProfile.textContent = data.bio
            userLink.href = data.html_url
            userImage.src = data.avatar_url
            userLogin.textContent = data.login
        })
}
getGitHubProfileInfos()
