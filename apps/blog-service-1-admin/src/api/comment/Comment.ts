import { Post } from "../post/Post";

export type Comment = {
  author: string | null;
  commentAuthor: string | null;
  commentContent: string | null;
  content: string | null;
  createdAt: Date;
  creationDate: Date | null;
  id: string;
  post?: Post | null;
  relatedPost: string | null;
  updatedAt: Date;
};
