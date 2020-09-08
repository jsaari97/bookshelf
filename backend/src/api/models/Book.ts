import { schema } from "nexus";

schema.objectType({
  name: "Book",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.authors();
    t.model.categories();
    t.model.users();
    t.model.addedBy();
    t.model.cover();
  },
});
