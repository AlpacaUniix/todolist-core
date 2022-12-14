import { dataSource } from "./dataSource";
import { Task } from './models';

export const listRepositories = dataSource.getRepository(Task);
