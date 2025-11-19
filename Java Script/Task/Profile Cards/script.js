let users = [];

document.getElementById("submitBtn").addEventListener("click", function () {
  const first = document.getElementById("fname").value.trim();
  const last = document.getElementById("lname").value.trim();
  const file = document.getElementById("photo").files[0];

  if (!first || !last || !file) return;

  const imgURL = URL.createObjectURL(file);  // FIXED LINE

  const obj = {
    firstName: first,
    lastName: last,
    photo: imgURL
  };

  users.push(obj);

  showCard(obj);
});

function showCard(user) {
  const card = `
    <div class="card">
      <img src="${user.photo}" alt="photo">
      <h2>${user.firstName} ${user.lastName}</h2>
    </div>
  `;

  document.getElementById("cardContainer").innerHTML = card;
}
