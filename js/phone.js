//Loading Data From Server

const loadPhone = async (searchTerm, isShowAll) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchTerm}`
  );
  const data = await res.json();
  const allPhone = data.data;

  displayAllPhone(allPhone, isShowAll);
};
//Display Loaded Data From Server
const displayAllPhone = (allPhone, isShowAll) => {
  const allPhoneContainer = document.getElementById("allPhoneContainer");
  allPhoneContainer.textContent = "";
  const loadMore = document.getElementById("loadMore");
  if (allPhone.length > 12 && !isShowAll) {
    loadMore.classList.remove("hidden");
  } else {
    loadMore.classList.add("hidden");
  }
  if (!isShowAll) {
    allPhone = allPhone.slice(0, 12);
  }
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
  isLoading(false);
};

//Handle Phone Search

const handlePhoneSearch = (isShowAll) => {
  isLoading(true);
  const searchText = document.getElementById("searchText");
  const searchTerm = searchText.value;
  loadPhone(searchTerm, isShowAll);
};

const isLoading = (loadingTerm) => {
  const loadSpinner = document.getElementById("loadSpinner");
  if (loadingTerm) {
    loadSpinner.classList.remove("hidden");
  } else {
    loadSpinner.classList.add("hidden");
  }
};

const handleShowAll = () => {
  handlePhoneSearch(true);
};
