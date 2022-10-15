export interface IPost {
  name: string;
  title: string;
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
  author: string;
  permalink: string;
  score: number;
  num_comments: number;
  id: string;
  created: number;
}

export interface IPagination {
  after?: string;
  limit: number;
}
