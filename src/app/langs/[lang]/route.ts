import { getDictionary } from "@/app/dictionaries";

export async function GET(
  request: Request,
  { params }: { params: { lang: string } }
) {
  const dict = await getDictionary(params.lang);

  return Response.json(dict);
}
