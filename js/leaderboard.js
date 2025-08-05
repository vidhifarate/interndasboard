db.collection("interns").orderBy("donations", "desc").get().then(snapshot => {
  const list = document.getElementById("leaderboard");
  snapshot.forEach(doc => {
    const intern = doc.data();
    const li = document.createElement("li");
    li.textContent = `${intern.name} — ₹${intern.donations}`;
    list.appendChild(li);
  });
});