import { schema } from "nexus";

schema.objectType({
  name: "Author",
  definition(t) {
    t.model.id()
    t.model.name()
  },
});
