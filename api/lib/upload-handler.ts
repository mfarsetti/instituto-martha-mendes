export type AssetStore = {
  storedAsset: {
    create(args: {
      data: {
        originalFilename?: string | null;
        contentType: string;
        size: number;
        data: Uint8Array;
      };
      select: { id: true };
    }): Promise<{ id: string }>;
    findUnique(args: {
      where: { id: string };
      select: { contentType: true; data: true };
    }): Promise<{ contentType: string; data: Uint8Array } | null>;
  };
};

export function getAssetUrl(id: string): string {
  return `/api/assets/${id}`;
}

export async function uploadFile(
  prisma: AssetStore,
  buffer: Buffer,
  originalFilename: string,
  contentType: string
): Promise<{ url: string }> {
  const asset = await prisma.storedAsset.create({
    data: {
      originalFilename: originalFilename || null,
      contentType: contentType || "application/octet-stream",
      size: buffer.byteLength,
      data: Uint8Array.from(buffer),
    },
    select: { id: true },
  });

  return { url: getAssetUrl(asset.id) };
}

export async function getUploadedFile(prisma: AssetStore, id: string) {
  return prisma.storedAsset.findUnique({
    where: { id },
    select: { contentType: true, data: true },
  });
}
