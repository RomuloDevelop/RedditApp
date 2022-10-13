export interface IPost {
  name: string;
  title: string;
  thumbnail: string;
  author: string;
  permalink: string;
  score: number;
  comments: number;
  id: string;
}

export interface IPagination {
  after?: string;
  limit: number;
}
