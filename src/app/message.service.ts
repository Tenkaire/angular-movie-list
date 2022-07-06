import { MOVIES } from './mock-movies';
import { Movie } from './movie';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
