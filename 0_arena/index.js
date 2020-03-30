let channel = 'under-consideration-1517888768';
let makeURL = (per, page) => `https://api.are.na/v2/channels/${channel}?per=${per}&page=${page}`;

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

  // if (entry.class === 'Text') {
  //   let text = entry.content_html;
  //   entryLi.innerHTML = text;
  // } else if (entry.class === 'Image') {
  //   entryLi.innerHTML = '<a href="' + entry.image.original.url + '" target="_blank"><img src="' + entry.image.display.url + '"></a><div class="caption">' + entry.title + '</div>';
  // }

  let entriesEl = document.getElementById('entries');
  entriesEl.insertBefore(entryEl, entriesEl.firstChild);
}
