const tableBody = document.getElementById("userTable");
    const refreshBtn = document.getElementById("refreshBtn");
    const loader = document.getElementById("loader");


    // ---------------- FETCH FUNCTION ----------------
    async function fetchUsers() {
      try {
        loader.style.display = "block";   // show spinner
        tableBody.innerHTML = "";         // clear previous data

        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        // Show all users in table
        data.forEach(user => {
          const row = `
            <tr>
              <td>${user.name}</td>
              <td>${user.email}</td>
              <td>${user.address.city}</td>
            </tr>
          `;
          tableBody.innerHTML += row;
        });

      } catch (err) {
        alert("Failed to fetch data!");
      } finally {
        loader.style.display = "none"; // hide spinner
      }
    }


    // Load data first time
    fetchUsers();

    // Refresh button
    refreshBtn.addEventListener("click", fetchUsers);
