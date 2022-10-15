export interface IPost {
  name: string;
  title: string;
  thumbnail: string | null;
  thumbnail_width: number;
  thumbnail_height: number;
  author: string;
  permalink: string;
  score: number;
  num_comments: number;
  id: string;
  created: number | string;
  pageIndex?: number;
}

export interface IPagination {
  after?: string;
  limit: number;
}
