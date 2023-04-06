import { Params, QueryKey } from "../common/types/query-key.type";
import { IPet } from "../components/Pet";

interface SearchParams {
    animal: string;
    location: string;
    breed: string;
}

export async function fetchSearch({
    queryKey,
}: {
    queryKey: QueryKey;
}): Promise<{
    pets: IPet[];
}> {
    const { animal, location, breed }: SearchParams = queryKey[1];

    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    if (res.ok) {
        return res.json();
    }

    throw new Error(`pet search not ok`);
}
