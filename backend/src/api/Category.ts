import { schema } from "nexus";

schema.objectType({
  name: "Category",
  definition(t) {
    t.model.id()
    t.model.name()
  },
});
