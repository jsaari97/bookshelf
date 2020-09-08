import { schema } from "nexus";

schema.objectType({
  name: "Book",
  definition(t) {
    t.model.id()
    t.model.title()
  },
});
