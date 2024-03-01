-- CreateTable
CREATE TABLE "form1" (
    "id" TEXT NOT NULL,
    "team_name" TEXT NOT NULL,
    "speaker_1" TEXT NOT NULL,
    "email_1" TEXT NOT NULL,
    "contact_1" TEXT NOT NULL,
    "institution_1" TEXT NOT NULL,
    "speaker_2" TEXT NOT NULL,
    "email_2" TEXT NOT NULL,
    "contact_2" TEXT NOT NULL,
    "institution_2" TEXT NOT NULL,
    "speaker_3" TEXT NOT NULL,
    "email_3" TEXT NOT NULL,
    "contact_3" TEXT NOT NULL,
    "institution_3" TEXT NOT NULL,
    "accomodation" BOOLEAN NOT NULL DEFAULT false,
    "message" TEXT NOT NULL,

    CONSTRAINT "form1_pkey" PRIMARY KEY ("id")
);
