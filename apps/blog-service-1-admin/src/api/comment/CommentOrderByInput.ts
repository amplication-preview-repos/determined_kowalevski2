import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  author?: SortOrder;
  commentAuthor?: SortOrder;
  commentContent?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  creationDate?: SortOrder;
  id?: SortOrder;
  postId?: SortOrder;
  relatedPost?: SortOrder;
  updatedAt?: SortOrder;
};
