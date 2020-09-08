# Migration `20200908100251`

This migration has been generated by Jim Saari at 9/8/2020, 1:02:51 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql

```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200908092709..20200908100251
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Author {
   id    Int              @id @default(autoincrement())
@@ -19,13 +19,13 @@
   books CategoriesOnBooks[]
 }
 model User {
-  id    Int            @id @default(autoincrement())
-  email String         @unique
-  name  String
-  books UsersOnBooks[]
-  Book  Book[]
+  id         Int            @id @default(autoincrement())
+  email      String         @unique
+  name       String
+  books      UsersOnBooks[]
+  addedBooks Book[]
 }
 model Book {
   id          Int                 @id @default(autoincrement())
```

