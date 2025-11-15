fetch("../data/packs.json")
    .then(response => response.json())
    .then(packs => {
        const container = document.getElementById("packs-container");

        packs.forEach(pack => {
            const div = document.createElement("div");
            div.className = "pack-card";
            div.style.borderColor = pack.color;

            div.innerHTML = `
                <h2 style="color:${pack.color}">${pack.name}</h2>
                <p>${pack.description || ""}</p>
                <h3>Levels:</h3>
                <ul>
                    ${pack.levels.map(lvl => `<li>${lvl}</li>`).join("")}
                </ul>
            `;

            container.appendChild(div);
        });
    });
