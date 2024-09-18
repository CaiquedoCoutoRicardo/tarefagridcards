const usernames = ['zCaio79', 'Paulo-VieiraDev', 'FelipeSargi', 'CarlosMocinho', 'CaiquedoCoutoRicardo']; 
const cardContainer = document.getElementById('card-container');

usernames.forEach(username => {
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => createCard(data))
    .catch(error => console.error('Erro ao buscar dados:', error));
});

function createCard(user) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <img class="profile-img" src="${user.avatar_url}" alt="Foto de ${user.login}">
    <h2>${user.name || user.login}</h2>
    <p>Usuário: ${user.login}</p>
    <a href="${user.html_url}" target="_blank">Perfil no GitHub</a>
  `;

  cardContainer.appendChild(card);
}
