import {Request, Response, Router} from 'express';
import * as service from "../../app/services/FilmsService";

const router: Router = Router();

router.get('/', async (req: Request, res: Response) => {
    const films = await service.getAll();
    res.send(films);
});

router.get('/:id', async (req: Request, res: Response) => {
    const film = await service.getById(parseInt(req.params.id));
    res.send(film);
});

router.post('/', async (req: Request, res: Response) => {
    const film = await service.create(req.body);
    res.status(201).send(film);
});

router.put('/:id', async (req: Request, res: Response) => {
    const film = await service.updateById(parseInt(req.params.id), req.body);
    res.status(201).send(film);
});

router.delete('/:id', (req: Request, res: Response) => {
    service.deleteById(parseInt(req.params.id));
    res.status(204).send();
})

export default router;