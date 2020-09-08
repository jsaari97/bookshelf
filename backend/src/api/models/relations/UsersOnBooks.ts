import { schema } from "nexus";

schema.objectType({
  name: "UsersOnBooks",
  definition(t) {
    t.model.user();
    t.model.userId();
    t.model.book();
    t.model.bookId();
    t.model.pageNumber();
    t.model.status();
  },
});
