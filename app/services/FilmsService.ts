import * as repository from "../../app/repositories/FilmsRepository"
import { FilmInput, FilmOutput } from "../models/FilmsModel";

export const getAll = (): Promise<FilmOutput[]> => {
    return repository.getAll();
};

export const getById = (id: number): Promise<FilmOutput> => {
    return repository.getById(id);
}

export const create = (payload: FilmInput) => {
    return repository.create(payload);
}

export const updateById = (id: number, payload: FilmInput): Promise<FilmOutput> => {
    return repository.updateById(id, payload);
}

export const deleteById = (id: number): Promise<void> => {
    return repository.deleteById(id);
}