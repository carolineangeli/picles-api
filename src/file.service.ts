import { Injectable, Patch } from "@nestjs/common";
import IFileService from "./interfaces/file.service.interface";
import * as fs from 'fs';

@Injectable()
export default class FileService implements IFileService{
    async readFile(path: string): Promise<Buffer>{
        return fs.readFileSync(path);
    }
}