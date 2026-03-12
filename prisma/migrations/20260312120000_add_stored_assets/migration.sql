CREATE TABLE "StoredAsset" (
  "id" TEXT NOT NULL,
  "originalFilename" TEXT,
  "contentType" TEXT NOT NULL,
  "size" INTEGER NOT NULL,
  "data" BYTEA NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "StoredAsset_pkey" PRIMARY KEY ("id")
);
