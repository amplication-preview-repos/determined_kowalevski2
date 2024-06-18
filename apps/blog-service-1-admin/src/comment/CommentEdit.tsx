import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PostTitle } from "../post/PostTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="commentAuthor" source="commentAuthor" />
        <TextInput label="commentContent" multiline source="commentContent" />
        <TextInput label="content" multiline source="content" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <ReferenceInput source="post.id" reference="Post" label="post">
          <SelectInput optionText={PostTitle} />
        </ReferenceInput>
        <TextInput label="relatedPost" source="relatedPost" />
      </SimpleForm>
    </Edit>
  );
};
