import { schema } from "nexus";

schema.enumType({
  name: "ReadingStatus",
  members: ["NOT_STARTED", "IN_PROGRESS", "FINISHED"],
});
