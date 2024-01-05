const displayUsers = (users, output) => {
  output.innerHTML = "";
  users.forEach((user) => {
    output.innerHTML += `
      <div class="card border-1 border-black" style="width: 18rem;">
        <img src="${user.avatar}" class="card-img-top" alt="avatar">
        <div class="card-body">
          <h5 class="card-title">UserName: ${user.userName}</h5>
          <h5 class="card-title">Email: ${user.email}</h5>
          <h5 class="card-title">Country: ${user.address}</h5>
          <h5 class="card-title">User ID: ${user.id}</h5>
        </div>
      </div>
      <hr>
    `;
  });
};

// Export the function for use in other files
export { displayUsers };