import { v4 as uuid } from 'uuid';

export abstract class Entity {
  readonly id?: string;
  
  constructor (){
    if(!this.id) {
      this.id = uuid();
    }
  }
}