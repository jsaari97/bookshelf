# Migration `20200903202626`

This migration has been generated by Jim Saari at 9/3/2020, 11:26:26 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "User" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
)

CREATE TABLE "Post" (
    "authorId" INTEGER,
    "content" TEXT,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "title" TEXT NOT NULL,

    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE
)

CREATE UNIQUE INDEX "User.email_unique" ON "User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200903202626
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,24 @@
+generator prisma_client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "sqlite"
+  url = "***"
+}
+
+model User {
+  email String  @unique
+  id    Int     @default(autoincrement()) @id
+  name  String?
+  posts Post[]
+}
+
+model Post {
+  authorId  Int?
+  content   String?
+  id        Int     @default(autoincrement()) @id
+  published Boolean @default(false)
+  title     String
+  author    User?   @relation(fields: [authorId], references: [id])
+}
```

