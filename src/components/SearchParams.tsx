import { useEffect, useState } from "react";
import Results from "./Results";
import { useBreedList } from "../hooks/useBreedList";
import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "../fetchs/fetchSearch";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "turtle"];

function SearchParams() {
    const [requestParams, setRequestParams] = useState({
        location: "",
        animal: "",
        breed: "",
    });
    const [animal, setAnimal] = useState("");
    const [breeds] = useBreedList(animal);

    const results = useQuery(["search", requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target as any);
                    const obj = {
                        animal: formData.get("animal") ?? "",
                        location: formData.get("location") ?? "",
                        breed: formData.get("breed") ?? "",
                    } as any;
                    setRequestParams(obj);
                }}
            >
                <label htmlFor="location">
                    Location
                    <input
                        name="location"
                        id="location"
                        placeholder="Location"
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => setAnimal(e.target.value)}
                    >
                        <option>{"---Select one---"}</option>
                        {ANIMALS.map((animal, i) => {
                            return <option key={i}>{animal}</option>;
                        })}
                    </select>
                </label>

                <label htmlFor="breed">
                    Breeds
                    <select
                        id="breed"
                        name="breed"
                        disabled={breeds.length === 0}
                    >
                        <option>{"---Select one---"}</option>
                        {breeds.map((breed) => {
                            return <option key={breed}>{breed}</option>;
                        })}
                    </select>
                </label>

                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    );
}

export default SearchParams;
