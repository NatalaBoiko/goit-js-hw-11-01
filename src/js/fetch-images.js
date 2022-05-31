export default class ImagesApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }
  fetchImages(searchQuery) {
    // console.log(this);
    return fetch(
      `https://pixabay.com/api/?key=27697316-9cc45c303ea5cb91afbaa3e72&q=${this.searchQuery}&page=${this.page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`,
    )
      .then(response => response.json())
      .then(({ hits }) => {
        console.log(hits);

        this.incrementPage();
        return hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
