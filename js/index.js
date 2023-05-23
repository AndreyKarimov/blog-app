// --> elements from HTML
const postTitleNode = document.getElementById("js-postTitle");
const postContentNode = document.getElementById("js-postContent");
const postPublishNode = document.getElementById("js-postPublish");
const postListNode = document.getElementById("js-postList");
const postItemDateNode = document.getElementById("js-postItemDate");
const postItemContentNode = document.getElementById("js-postItemContent");
const foolProofNode = document.getElementById("js-foolProof");
const postTitleCounter = document.getElementById("js-postTitleCounter");
const postContentCounter = document.getElementById("js-postContentCounter");
const foolProofTitle = document.getElementById("js-foolProofTitle");
const foolProofContent = document.getElementById("js-foolProofContent");

// --> constants
const MAX_QUANTITY_OF_TITLE = 100;
const MAX_QUANTITY_OF_CONTENT = 200;
const RED_FONT_CLASS = "red";
const DISPLAY_ON_CLASSNAME = "display-on";
const MORE_200 = "Пост больше 200 символов";
const MORE_100 = "Заголовок больше 100 символов";

// --> variables
const posts = [];

// --> functions

const publishBtnHadler = () => {
  const postFromUser = getPostFromUser();
  setPost(posts, postFromUser);
  renderPosts(posts);
};

//get value from field
const getValue = (Node) => {
  return Node.value;
};

//get post from user
const getPostFromUser = (title, content, date) => {
  title = getValue(postTitleNode);
  content = getValue(postContentNode);
  date = new Date();
  if (
    MAX_QUANTITY_OF_TITLE - getLength(postTitleNode) < 0 ||
    MAX_QUANTITY_OF_CONTENT - getLength(postContentNode) < 0
  ) {
    return;
  }
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

// counter letters in postContentNode
const counterContentLetters = () => {
  postContentCounter.innerHTML = `Доступно символов: ${
    MAX_QUANTITY_OF_CONTENT - getLength(postContentNode)
  }`;
  if (MAX_QUANTITY_OF_CONTENT - getLength(postContentNode) < 0) {
    postContentCounter.classList.add(RED_FONT_CLASS);
    foolProofContent.classList.add(RED_FONT_CLASS);
  } else {
    postContentCounter.classList.remove(RED_FONT_CLASS);
    foolProofContent.classList.remove(RED_FONT_CLASS);
  }
};

// counter letters in postTitleNode
const counterTitleLetters = () => {
  postTitleCounter.innerHTML = `Доступно символов: ${
    MAX_QUANTITY_OF_TITLE - getLength(postTitleNode)
  }`;
  if (MAX_QUANTITY_OF_TITLE - getLength(postTitleNode) < 0) {
    postTitleCounter.classList.add(RED_FONT_CLASS);
    foolProofTitle.classList.add(RED_FONT_CLASS);
  } else {
    postTitleCounter.classList.remove(RED_FONT_CLASS);
    foolProofTitle.classList.remove(RED_FONT_CLASS);
  }
};

// get length from field
const getLength = (field) => {
  return field.value.length;
};

// init function
const init = () => {
  foolProofTitle.innerHTML = MORE_100;
  foolProofContent.innerHTML = MORE_200;
};

// --> main programme
init();
postPublishNode.addEventListener("click", publishBtnHadler);

postTitleNode.addEventListener("input", counterTitleLetters);
postContentNode.addEventListener("input", counterContentLetters);

// сделать отчистку длины полей
// не выводится более 2х длинных постов
