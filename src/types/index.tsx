interface ArticlesListEntryProps {
  id: number;
  source: string;
  title: string;
  description: string;
  author: string;
  url: string;
}

interface StoreState {
  articles: Array<Object>;
  isFetching: boolean;
  articlesFetched: boolean;
  articlesDisplayed: boolean;
  countryFilter: string;
  categoryFilter: string;
}

export { ArticlesListEntryProps, StoreState };
