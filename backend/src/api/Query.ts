import { schema } from "nexus";

schema.queryType({
  definition(t) {
    t.crud.posts({ type: "Post", ordering: true, filtering: true });
  },
});
