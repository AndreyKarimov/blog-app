// --> elements from HTML
const postTitleNode = document.getElementById("js-postTitle");
const postContentNode = document.getElementById("js-postContent");
const postPublishNode = document.getElementById("js-postPublish");
const postListNode = document.getElementById("js-postList");
const postItemDateNode = document.getElementById("js-postItemDate");
const postItemContentNode = document.getElementById("js-postItemContent");
const foolProofNode = document.getElementById("js-foolProof");

// --> constants

// --> variables
const posts = [];

// --> main programme
postPublishNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();
  setPost(posts, postFromUser);
  renderPosts(posts);
});

// --> functions

//get value from field
const getValue = (Node) => {
  return Node.value;
};

//get post from user
const getPostFromUser = (title, content, date) => {
  title = getValue(postTitleNode);
  content = getValue(postContentNode);
  date = new Date();
  postTitleNode.value = "";
  postContentNode.value = "";
  return {
    title: title,
    content: content,
    date: date,
  };
};

//set post in posts
const setPost = (posts, post) => {
  posts.push(post);
};

//render posts in post-list
const renderPosts = (posts) => {
  postListNode.innerHTML = "";
  posts.forEach((post) => {
    const postListItem = document.createElement("li");
    postListItem.classList.add("post-item");

    const postDate = document.createElement("div");
    postDate.classList.add("post-item__date");
    postDate.innerText = getDate(post.date);

    const postTitle = document.createElement("div");
    postTitle.classList.add("post-item__title");
    postTitle.innerText = post.title;

    const postContent = document.createElement("div");
    postContent.classList.add("post-item__content");
    postContent.innerText = post.content;

    postListItem.appendChild(postDate);
    postListItem.appendChild(postTitle);
    postListItem.appendChild(postContent);

    postListNode.appendChild(postListItem);
  });
};

// get date in required format
const getDate = (date) => {
  let dateInFormat = `${set0(date.getDate())}.${set0(date.getMonth())}.${set0(
    date.getFullYear()
  )} ${set0(date.getHours())}:${set0(date.getMinutes())}`;
  return dateInFormat;
};

//set 0 to string
const set0 = (number) => {
  return String(number).padStart(2, "0");
};
