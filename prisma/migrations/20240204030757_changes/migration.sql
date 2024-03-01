-- CreateTable
CREATE TABLE "form2" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "name_poc1" TEXT NOT NULL,
    "contact_poc1" TEXT NOT NULL,
    "email_poc1" TEXT NOT NULL,
    "name_poc2" TEXT NOT NULL,
    "contact_poc2" TEXT NOT NULL,
    "email_poc2" TEXT NOT NULL,
    "slots" TEXT NOT NULL,
    "ajudicator_slots" TEXT NOT NULL,
    "accomodation" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT NOT NULL,

    CONSTRAINT "form2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form3" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "accomodation" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT NOT NULL,

    CONSTRAINT "form3_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "form4" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "speaking" TEXT NOT NULL,

    CONSTRAINT "form4_pkey" PRIMARY KEY ("id")
);
