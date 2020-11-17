import * as fs from 'fs';
import * as path from 'path';
import { Request, Response, NextFunction } from 'express';

export interface Ihobbies {
    hobbies: {
        title: string;
        passion: number;
    }
}

const fileLocation = path.join(__dirname, '../../data/hobbies.json');
const file = JSON.parse(fs.readFileSync(fileLocation, 'utf-8'));

export async function hobbies(req: Request, res: Response, next: NextFunction): Promise<Response<Ihobbies>> {
    const file = JSON.parse(fs.readFileSync(path.join(__dirname, '../../data/hobbies.json'), 'utf-8'));
    return res.status(200).json(file);
};

export async function addHobbies(req: Request, res: Response, next: NextFunction) {
    file.hobbies.push(req.body);
    fs.writeFileSync(fileLocation, JSON.stringify(file.hobbies));
    res.send(); 
}