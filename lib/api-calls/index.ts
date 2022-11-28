import { fetchAPI } from "../index";

export async function getAllReports() {
  const data = await fetchAPI("/reports");
  return data;
}

export async function deleteAReport(reportId: number) {
  const result = await fetchAPI("/report/" + reportId, { method: "DELETE" });
  return result;
}

export async function createAReport(
  title: string,
  description: string,
  image: string,
  lat: number,
  lng: number
) {
  // el id del user se manda via authorization headers
  const result = await fetchAPI("/reports", {
    method: "POST",
    body: { title, description, image, lat, lng },
  });
  return result;
}

export async function updateAReport(
  reportId: number,
  description?: string,
  img?: string,
  status?: string
) {
  const result = await fetchAPI("/report/" + reportId, {
    method: "PUT",
    body: { description, image: img, status },
  });
  return result;
}
