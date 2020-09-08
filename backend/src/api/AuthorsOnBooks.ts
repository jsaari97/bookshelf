import { schema } from "nexus";

schema.objectType({
  name: "AuthorsOnBooks",
  definition(t) {
    t.model.author();
    t.model.authorId();
    t.model.book();
    t.model.bookId();
  },
});
