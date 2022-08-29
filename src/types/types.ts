export type TRootState = {
  pagesState: TPagesState;
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
  life: boolean;
  contacts: boolean;
};
