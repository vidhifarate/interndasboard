const username = localStorage.getItem("intern");
if (!username) location.href = "../index.html";

document.getElementById("name").textContent = username;
document.getElementById("referral").textContent = `${username}2025`;

db.collection("interns").doc(username).get().then(doc => {
  if (doc.exists) {
    document.getElementById("donations").textContent = doc.data().donations;
  }
});