const villagersDisplay = document.getElementById("villagers");
const bugsDisplay = document.getElementById("bugs");
const fossilsDisplay = document.getElementById("fossils");
const seaCreaturesDisplay = document.getElementById("sea-creatures");

// Villagers

const villagersAPICurrentEndpoint = "https://acnhapi.com/v1/villagers/";

async function loadVillagers(
  area = villagersDisplay,
  renderVillagers = () => {},
) {
  try {
    const response = await fetch(villagersAPICurrentEndpoint);
    if (!response.ok) throw response;
    const data = await response.json();
    console.log(data);
    renderVillagers(Object.values(data));
  } catch (err) {
    console.log(err);
  }
}
const renderVillagers = (villagers = [], area = villagersDisplay) => {
  // console.log(data);
  const list = document.createElement("ul");
  list.className = "villagers-list";
  for (const {
    id,
    image_uri,
    name,
    gender,
    species,
    personality,
  } of villagers) {
    if (id <= 12) {
      const listItem = document.createElement("li");
      listItem.className = "villagers-list-item";
      listItem.innerHTML = `<img src="${image_uri}" alt="" width="100" class="story-avatar"><span class="name">${name["name-EUen"]}</span><span class="label">Gender</span><span>${gender}</span><span class="label">Species</span><span>${species}</span><span class="label">Personality</span><span>${personality}</span>`;
      list.append(listItem);
    }
  }
  area.replaceChildren(list);
};

loadVillagers(villagersDisplay, renderVillagers);
