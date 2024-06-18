import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";

export type CommentWhereInput = {
  author?: StringNullableFilter;
  commentAuthor?: StringNullableFilter;
  commentContent?: StringNullableFilter;
  content?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  post?: PostWhereUniqueInput;
  relatedPost?: StringNullableFilter;
};
