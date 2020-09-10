import { schema } from "nexus";

schema.queryType({
  definition(t) {
    t.crud.author();
    t.crud.authors({ type: "Author" });

    t.crud.book();
    t.crud.books({ type: "Book" });

    t.crud.user();
    t.crud.users({ type: "User" });

    t.crud.category();
    t.crud.categories({ type: "Category" });

    t.crud.authorsOnBooks();
    t.crud.usersOnBooks();
    t.crud.categoriesOnBooks();

    t.field("me", {
      type: "User",
      resolve: (_, __, ctx) => {
        return ctx.db.user.findOne({
          where: {
            id: 1,
          },
        });
      },
    });
  },
});
