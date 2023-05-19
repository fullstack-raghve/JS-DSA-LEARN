Certainly! Here's an example of how to use Angular with NgRx for state management:

Install NgRx packages:
bash
Copy code
npm install @ngrx/store @ngrx/effects @ngrx/entity
Create a state interface:
typescript
Copy code
// app.state.ts

import { EntityState } from '@ngrx/entity';

export interface User {
  id: number;
  name: string;
}

export interface AppState {
  users: EntityState<User>;
}
Define actions:
typescript
Copy code
// user.actions.ts

import { createAction, props } from '@ngrx/store';
import { User } from './app.state';

export const addUser = createAction('[User] Add User', props<{ user: User }>());
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());
Create a reducer:
typescript
Copy code
// user.reducer.ts

import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from './app.state';
import * as UserActions from './user.actions';

export const userAdapter = createEntityAdapter<User>();

export interface UserState extends EntityState<User> {}

export const initialState: UserState = userAdapter.getInitialState();

export const userReducer = createReducer(
  initialState,
  on(UserActions.addUser, (state, { user }) => userAdapter.addOne(user, state)),
  on(UserActions.deleteUser, (state, { id }) => userAdapter.removeOne(id, state))
);
Create effects:
typescript
Copy code
// user.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from './user.service';
import * as UserActions from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUsers),
      mergeMap(() =>
        this.userService.getUsers().pipe(
          map(users => UserActions.loadUsersSuccess({ users })),
          catchError(error => of(UserActions.loadUsersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}
Create a service:
typescript
Copy code
// user.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './app.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User): Observable<User> {
    this.users.push(user);
    return of(user);
  }

  deleteUser(id: number): Observable<number> {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
    return of(id);
  }
}
Set up the store:
typescript
Copy code
// app.module.ts

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './user.reducer';
import { UserEffects } from './user.effects';

@NgModule({
  imports: [
    StoreModule.forRoot({ users: userReducer }),
    EffectsModule.forRoot([UserEffects])
  ],
  // ...
})
export class