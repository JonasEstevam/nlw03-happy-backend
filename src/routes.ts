import {Router} from 'express';
import OrphanagesControler from './controllers/OrphanagesController';
import multer from 'multer';
import uploadConfig from './config/upload';
const routes = Router();

const upload = multer(uploadConfig);

routes.post('/orphanages', upload.array('images'), OrphanagesControler.create);
routes.get('/orphanages', OrphanagesControler.index);
routes.get('/orphanages/:id', OrphanagesControler.show);

export default routes;
