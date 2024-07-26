let titles = document.querySelectorAll('h1, h2, h3,h4, h5, h6');

if(titles.length <= 1) {
    throw new Error("No titles found, simple TOC will now stop");
}

let toc_container = document.createElement('div');
toc_container.classList.add('toc_container');

let toc_title = document.createElement('h1')
toc_title.classList.add('toc_title');
toc_title.innerText = "Table of content";

toc_title.addEventListener('click', toggle_toc)
let toc_content = document.createElement('ul');
toc_content.classList.add('hide');

titles.forEach((title, key) => {
    let toc_entry = document.createElement('li');
    toc_entry.classList.add(title.tagName !== "H1" ? `submenu_${title.tagName}` : "menu");
    toc_entry.innerHTML = `<p data-key="${key}">${title.innerText}</p>`;
    toc_content.appendChild(toc_entry);
})

toc_container.appendChild(toc_title);
toc_container.appendChild(toc_content);
document.body.appendChild(toc_container);

document.querySelectorAll('.toc_container li').forEach((li) => {
    li.addEventListener('click', (event) => {
        titles[event.target.dataset.key].scrollIntoView({ behavior: "smooth"});
    })
})


function toggle_toc(event) {
    event.target.nextElementSibling.classList.toggle('hide');
}