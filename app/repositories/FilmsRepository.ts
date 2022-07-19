import model, { FilmAttributes, FilmInput, FilmOutput } from "../../app/models/FilmsModel"

export const getAll = async (): Promise<FilmOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<FilmOutput> => {
    const film = await model.findByPk(id);

    if (!film) {
        throw new Error("Registro não encontrado")
    }

    return film;
};

export const create = (payload: FilmInput): Promise<FilmOutput> => {
   return model.create(payload);
}

export const updateById = async (id: number, payload: FilmInput): Promise<FilmOutput> => {
    const film = await model.findByPk(id);

    if (!film) {
        throw new Error("Registro não encontrado");
    }

    return film.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
    const film = await model.findByPk(id)

    if (!film) {
        throw new Error("Registro não encontrado");
    }

    return film.destroy();
}