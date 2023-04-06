import { IPet } from "../components/Pet";

type RouteDetail = string;
type ParamsDetail = string | null | undefined;
export type QueryKeyFetchPet = [RouteDetail, ParamsDetail];

interface PetDetail extends IPet {
    city: string;
    state: string;
    description: string;
}

export async function fetchPet({
    queryKey,
}: {
    queryKey: QueryKeyFetchPet;
}): Promise<{ pets: PetDetail[] }> {
    const id: ParamsDetail = queryKey[1];

    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

    if (apiRes.ok) {
        return apiRes.json();
    }

    throw new Error(`details/${id} fetch not ok`);
}
