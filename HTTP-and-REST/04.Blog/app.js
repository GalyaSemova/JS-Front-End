function attachEvents() {
    const loadPostsBtn = document.getElementById('btnLoadPosts');
    const selectContainer = document.getElementById('posts');
    const viewPostBtn = document.getElementById('btnViewPost');
    const postTitleHeader = document.getElementById('post-title');
    const postBodyParagraph = document.getElementById('post-body');
    const postCommentsList = document.getElementById('post-comments');
    const BASE_URL = 'http://localhost:3030/jsonstore/blog/';

    loadPostsBtn.addEventListener('click', loadPostsHandler);
    viewPostBtn.addEventListener('click', viewPostHandler);

    let postsArr = [];


    function loadPostsHandler() {
       fetch(`${BASE_URL}posts`)
        .then((res) => res.json())
        .then((posts) => {
            for (const postId in posts) {
                const optionCont = document.createElement('option');
                optionCont.value = postId;
                optionCont.innerHTML = posts[postId].title;
                selectContainer.appendChild(optionCont);
                postsArr.push({title: posts[postId].title, body: posts[postId].body});
                }

            })    
        
    }

    async function viewPostHandler() {
        try {
            const res = await fetch(`${BASE_URL}comments`);
            if (!res.ok) throw new Error();

            const data = await res.json();
            const comments = Object.values(data).filter(el => el.postId === selectContainer.value);

            postTitleHeader.textContent = selectContainer.selectedOptions[0].textContent;
            const postToDisplay = postsArr.filter(p => p.title === selectContainer.selectedOptions[0].textContent);
            postBodyParagraph.innerHTML = `${postToDisplay[0].body}`;
            postCommentsList.innerHTML = '';

            comments.forEach(el => {
                const liElement = document.createElement('li');
                liElement.textContent = el.text;
                postCommentsList.appendChild(liElement);
            })
        } catch (e) {
            console.log(e);
        }

    }

          

}

attachEvents();