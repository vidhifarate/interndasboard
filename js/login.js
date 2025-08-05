function login() {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Enter a valid name!");

  localStorage.setItem("intern", username);

  db.collection("interns").doc(username).set({
    name: username,
    donations: Math.floor(Math.random() * 10000) + 1
  }, { merge: true }).then(() => {
    window.location.href = "pages/dashboard.html";
  });
}