import { schema } from "nexus";

schema.objectType({
  name: "CategoriesOnBooks",
  definition(t) {
    t.model.category();
    t.model.categoryId();
    t.model.book();
    t.model.bookId();
  },
});
