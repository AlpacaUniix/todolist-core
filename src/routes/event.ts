import { listRepositories } from '../repositories'
import { Request, Response, Router } from 'express'



const router = Router()


router.get('/', async (req, res) => {
   const taskLists = await listRepositories.find();
   return res.send('hey')
})

// router.get('/:id', async (req: Request, res: Response) => {
//    const taskId = req.params.id;
//    const taskLists = await listRepositories.findOneBy({id : taskId});
//    return res.json(taskLists);
// });

// router.post('/', async (req: Request, res: Response,next) => {
//       try{
//          const taskLists = await listRepositories.save(req.body);
//          return res.json(taskLists);
//       }catch(err){
//          console.log(err)
//          next(err);
//       }
// });
// router.patch("/:id", async(req, res,next) =>{
//     try{
//       const taskId = req.params.id;
//       const task = await listRepositories.findOneByOrFail({ id: taskId });

//       Object.assign(task, req.body);
//       listRepositories.save(task);
//       return res.send(task);
//     }catch (err){
//       next(err);
//     }
// })

// router.delete('/:id', async (req, res,next) =>{
//    try{
//       const taskId = req.params.id;
//       const task = await listRepositories.findOneByOrFail({ id: taskId });
//       listRepositories.remove(task);
//       return res.status(200).send();

//    }catch (err){
//       next(err);
//    }
// })

export const todoRouter = router;