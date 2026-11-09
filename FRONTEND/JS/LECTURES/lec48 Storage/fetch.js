let profileDiv = document.querySelector("#show-profile")

async function getUser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`)
    let data = await response.json()
    return data

}
// getUser("pranishh-dev")

let btn = document.querySelector("button")
let input = document.querySelector("input")
// console.log(btn);

btn.addEventListener("click", async (e) => {
    e.preventDefault()
    try {
        let username = input.value.trim() || "nishantsaini2331"
        let data = await getUser(username)

        profileDiv.innerHTML = ` <h1>${data.login}</h1>
        <img src = "${data.avatar_url}">
        <p>Following: ${data.following}</p>
        <p>Followers: ${data.followers} </p>`
    } catch (error) {
        profileDiv.innerHTML = `<p>${error}</p>`
    }

})

function updateLiveStatus() {
    document.querySelector("#live-status").textContent = navigator.onLine ? "Online" : "Offline"
}
window.addEventListener("online", updateLiveStatus)
window.addEventListener("offline", updateLiveStatus)