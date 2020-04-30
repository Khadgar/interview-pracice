(() => {
  //TODO make virtualscrolling
  console.log('init');
  const quoatesUrl = 'https://cors-anywhere.herokuapp.com/https://opinionated-quotes-api.gigalixirapp.com/v1/quotes?rand=t&n=5';

  const scroller = document.querySelector('.container');
  const sentinel = document.querySelector('#sentinel');

  const fetchQuotes = () => {
    return fetch(quoatesUrl)
      .then(data => {
        return data.json();
      })
      .then(json => {
        return json.quotes;
      });
  };

  const addToContainer = quotes => {
    quotes.forEach(quote => {
      scroller.appendChild(generateListItem(quote));
    });
  };

  const generateListItem = quote => {
    const tile = document.createElement('div');
    tile.setAttribute('class', 'random-tile');
    const title = document.createElement('H3');
    const t = document.createTextNode(quote.author);
    title.appendChild(t);
    tile.appendChild(title);
    const q = document.createElement('div');
    q.innerText = quote.quote;
    tile.appendChild(q);
    return tile;
  };

  const loadItems = () => {
    fetchQuotes().then(quotes => {
      addToContainer(quotes);
    });
  };

  const initIntersectionObserver = () => {
    const options = {
      root: scroller,
    };

    const callback = entries => {
      if (entries.some(entry => entry.intersectionRatio > 0)) {
        loadItems();
        scroller.appendChild(sentinel);
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(sentinel);
  };

  fetchQuotes().then(quotes => {
    addToContainer(quotes);
    initIntersectionObserver();
  });
})();
