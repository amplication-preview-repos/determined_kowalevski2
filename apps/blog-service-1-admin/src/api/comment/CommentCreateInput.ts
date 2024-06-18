import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  commentAuthor?: string | null;
  commentContent?: string | null;
  content?: string | null;
  creationDate?: Date | null;
  post?: PostWhereUniqueInput | null;
  relatedPost?: string | null;
};
