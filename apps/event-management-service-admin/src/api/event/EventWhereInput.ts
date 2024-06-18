import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type EventWhereInput = {
  createdBy?: StringNullableFilter;
  description?: StringNullableFilter;
  eventDate?: DateTimeNullableFilter;
  eventName?: StringNullableFilter;
  id?: StringFilter;
};
