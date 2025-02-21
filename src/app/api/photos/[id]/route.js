import { getPhotoByid } from "@/lib/image-data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const id = params?.id;
  const data = getPhotoByid(id);
  return NextResponse.json(data);
}
