export default function customLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `https://res.cloudinary.com/dfilepe0f/image/upload/w_${width},q_${
    quality || 75
  }/${src}`;
}
