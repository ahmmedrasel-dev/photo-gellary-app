import { getAllPhoto } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET() {
  const data = getAllPhoto();

  const filteredData = data.map((photo) => ({
    id: photo.id,
    title: photo.title,
    url: photo.url,
  }));
  return NextResponse.json(filteredData);
}
