let channel = 'postcards-yizb0oq2rza';
let makeURL = (per, page) => `https://api.are.na/v2/channels/${channel}?per=${per}&page=${page}`;

// Get metadata
fetch(makeURL(1, 1))
  .then((res) => res.json())
  .then((json) => {
    document.querySelector('#title').innerHTML = json.title;
  });

// Get the blocks
fetch(makeURL(1, 1))
  .then((res) => res.json())
  .then((json) => count = json.length)
  .then((count) => {
    let per = 100;
    let pages = Math.ceil(count/per);

    let fetches = [];
    for (let page = 1; page <= pages; page++) {
      fetches.push(fetch(makeURL(per, page)).then((res) => res.json()).then((json) => json.contents));
    }

    Promise.all(fetches)
      .then((contents) => {
        contents.forEach((content) => {
          content.forEach((entry) => {
            makeEntry(entry);
        });
      });
    });
  });


function makeEntry(entry) {
  let entryTemplate = document.getElementById("entry-template");
  let entryEl = entryTemplate.content.cloneNode(true);
  let entryLi = entryEl.querySelector('li');

  let entryClass = entry.class;

  if (entryClass == 'Image') {
    entryLi.querySelector('a').href = entry.image.original.url;
    entryLi.querySelector('img').src = entry.image.display.url;
    entryLi.querySelector('.title').innerHTML = entry.title;
    entryLi.querySelector('.title').innerHTML = entry.title;
    entryLi.querySelector('.description').innerHTML = entry.description_html;
  } else if (entryClass == 'Text') {
    entryLi.querySelector('.description').innerHTML = entry.content_html;
  }

  let entriesEl = document.getElementById('entries');
  entriesEl.insertBefore(entryEl, entriesEl.firstChild);
}
