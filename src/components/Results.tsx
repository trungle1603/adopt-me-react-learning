import Pet, { IPet } from "./Pet";

function Results({ pets }: { pets: IPet[] }) {
    return (
        <div className="search">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map((pet) => (
                    <Pet
                        key={pet.id}
                        id={pet.id}
                        name={pet.name}
                        animal={pet.animal}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                    />
                ))
            )}
        </div>
    );
}

export default Results;
