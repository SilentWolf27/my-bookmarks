interface SupabaseImageLoaderParams {
  src: string;
  width: number;
  quality: number;
}

export default function supabaseLoader({
  src,
  width,
  quality,
}: SupabaseImageLoaderParams) {
  return `${
    process.env.NEXT_PUBLIC_S3_HOST
  }/v1/object/public/${src}?width=${width}&quality=${quality || 75}`;
}
