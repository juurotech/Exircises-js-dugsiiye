let posts = JSON.parse(localStorage.getItem("posts")) || [];
let editIndex = null;

const titleInput = document.getElementById("title");
const imageInput = document.getElementById("image");
const contentInput = document.getElementById("content");
const postsDiv = document.getElementById("posts");
const submitBtn = document.getElementById("submitBtn");


const editModal = document.getElementById("editModal");
const editTitle = document.getElementById("editTitle");
const editImage = document.getElementById("editImage");
const editContent = document.getElementById("editContent");
const updateBtn = document.getElementById("updateBtn");

submitBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const image = imageInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Title iyo Content waa waajib");
    return;
  }

  posts.push({ title, image, content });
  localStorage.setItem("posts", JSON.stringify(posts));
  clearForm();
  renderPosts();
});

function renderPosts() {
  postsDiv.innerHTML = "";

  posts.forEach((post, index) => {
    postsDiv.innerHTML += `
      <div class="post">
        <img src="${post.image || 'https://source.unsplash.com/800x400/?blog'}">
        <div class="post-content">
          <h3>${post.title}</h3>
          <p>${post.content}</p>
          <div class="actions">
            <button onclick="openEdit(${index})">Edit</button>
            <button onclick="deletePost(${index})">Delete</button>
          </div>
        </div>
      </div>
    `;
  });
}


function openEdit(index) {
  editIndex = index;
  editTitle.value = posts[index].title;
  editImage.value = posts[index].image;
  editContent.value = posts[index].content;
  editModal.style.display = "flex";
}


updateBtn.addEventListener("click", () => {
  posts[editIndex] = {
    title: editTitle.value,
    image: editImage.value,
    content: editContent.value
  };

  localStorage.setItem("posts", JSON.stringify(posts));
  closeModal();
  renderPosts();
});


function deletePost(index) {
  posts.splice(index, 1);
  localStorage.setItem("posts", JSON.stringify(posts));
  renderPosts();
}

function closeModal() {
  editModal.style.display = "none";
}


function clearForm() {
  titleInput.value = "";
  imageInput.value = "";
  contentInput.value = "";
}


renderPosts();
