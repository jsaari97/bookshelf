import { schema } from "nexus";

schema.objectType({
  name: "Post",
  definition(t) {
    t.model.id()
    t.model.title()
  },
});
