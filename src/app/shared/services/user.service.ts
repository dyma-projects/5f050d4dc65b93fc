import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  public users = new BehaviorSubject<string[]>([]);
  constructor() {}

  public addUser(user: string) {
    this.users.next(this.users.getValue().concat(user));
  }
}
