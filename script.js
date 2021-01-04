const playersList = document.getElementById("teamPlayers")
const addPlayerButton = document.getElementById("addPlayerButton")
const playerName = document.getElementById("playerName")
const playerRole = document.getElementById("playerRole")

const addPlayer = () =>{
    if(playerName.value != ''){
        let nome = playerName.value
        let role = playerRole.value.trim()
        console.log('Adicionado o player', nome)
        const player = document.createElement('li')
        if(role == ''){
            player.innerHTML = `<li>${nome}</li>`
        }
        else(
            player.innerHTML = `<li>${nome} - Função: ${role}</li>`
        )
        playersList.append(player)
        playerName.value = ''
        playerRole.value = ''
    }
    else{
        alert('Informe o nickname do player!!')
    }
}

addPlayerButton.addEventListener('click', addPlayer)
