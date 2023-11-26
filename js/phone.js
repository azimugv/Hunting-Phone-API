//Loading Data From Server

const loadPhone = async (searchTerm) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchTerm}`
  );
  const data = await res.json();
  const allPhone = data.data;
  displayAllPhone(allPhone);
};

//Display Loaded Data From Server
const displayAllPhone = (allPhone) => {
  const allPhoneContainer = document.getElementById("allPhoneContainer");

  allPhone.forEach((phone) => {
    const phoneHTML = document.createElement("div");
    phoneHTML.innerHTML = `
      <div class="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="${phone.image}"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${phone.brand}</h2>
            <p>${phone.phone_name}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-accent">Show Details</button>
            </div>
          </div>
        </div>
      `;
    allPhoneContainer.appendChild(phoneHTML);
  });
};

//Handle Phone Search

const handlePhoneSearch = () => {
  const searchText = document.getElementById("searchText");
  const searchTerm = searchText.value;
  searchText.value = "";
  loadPhone(searchTerm);
};
