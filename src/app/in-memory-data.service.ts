import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        const  tasks = [
            { id : 1, name : "Task init", responsible : "Matheus", priority: 1 },
            { id : 2, name : "Task Preparing", responsible : "Marcela", priority : 2 },
            { id : 3, name : "Task Executing", responsible : "Alysson", priority : 2 },
            { id : 4, name : "Task finish", responsible : "Melqui", priority : 3 }
        ];
        return{tasks};
    }
}