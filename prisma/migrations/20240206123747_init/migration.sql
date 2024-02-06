/*
  Warnings:

  - Changed the type of `slots` on the `form2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `ajudicator_slots` on the `form2` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "form1" ALTER COLUMN "message" DROP NOT NULL;

-- AlterTable
ALTER TABLE "form2" DROP COLUMN "slots",
ADD COLUMN     "slots" INTEGER NOT NULL,
DROP COLUMN "ajudicator_slots",
ADD COLUMN     "ajudicator_slots" INTEGER NOT NULL,
ALTER COLUMN "message" DROP NOT NULL;

-- AlterTable
ALTER TABLE "form3" ALTER COLUMN "message" DROP NOT NULL;
