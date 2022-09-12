export type TRootState = {
  noticesState: TNoticesState;
  pagesState: TPagesState;
};

/**
 * noticesState
 */
export type TNoticesState = {
  notices: TNotices;
};
export type TNotices = {
  isReadedNews: boolean;
  isReadedShortNews: boolean;
  isReadedActiveAdverts: boolean;
  isReadedShortActiveAdverts: boolean;
  isReadedInactiveAdverts: boolean;
  news: TNotice[];
  shortNews: TNotice[];
  activeAdverts: TNotice[];
  shortActiveAdverts: TNotice[];
  inactiveAdverts: TNotice[];
};
export type TNotice = {
  uuid: string;
  title: string;
  content: TBloc[];
};
export type TBloc = {
  tag: string;
  value?: string;
};

/**
 * pagesState
 */
export type TPagesState = {
  pages: TPages;
};
export type TPages = {
  primary: boolean;
  about: boolean;
  sanctitys: boolean;
  clergy: boolean;
  schedule: boolean;
  lifenews: boolean;
  lifeadverts: boolean;
  contacts: boolean;
};
