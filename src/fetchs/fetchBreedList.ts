import { Params, QueryKey } from "../common/types/query-key.type";

export async function fetchBreedList({
    queryKey,
}: {
    queryKey: QueryKey;
}): Promise<{ breeds: string[] }> {
    const animal: Params = queryKey[1];

    const apiRes = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
    );

    if (apiRes.ok) {
        return apiRes.json();
    }

    throw new Error(`breeds/${animal} fetch not ok`);
}

// USE EFFECT VERSION
// import { useEffect, useState } from "react";

// const localCache: Record<string, string[]> = {};
// type BreedList = [string[], string];

// export function useBreedList(animal: string): BreedList {
//     const [breadList, setBreedList] = useState([] as string[]);
//     const [status, setStatus] = useState("unloaded");

//     useEffect(() => {
//         if (!animal) {
//             setBreedList([]);
//         } else if (localCache[animal]) {
//             setBreedList(localCache[animal]);
//         } else {
//             requestBreedList();
//         }

//         async function requestBreedList() {
//             setBreedList([]);
//             setStatus("loading");

//             const res = await fetch(
//                 `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//             );
//             const json = await res.json();

//             localCache[animal] = json.breeds || [];
//             setBreedList(localCache[animal]);
//             setStatus("loaded");
//         }
//     }, [animal]);

//     return [breadList, status];
// }
