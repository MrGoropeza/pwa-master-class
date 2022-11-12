import { Injectable } from '@angular/core';
import { UserInfo } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { TodoModel } from 'src/app/models/todo.model';
import { serverTimestamp } from '@angular/fire/firestore';
import { v4 as uuidV4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private user!: UserInfo | null;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe((user) => {
      this.user = user;
    });
  }

  public getTodo(): Observable<TodoModel[]> {
    return this.firestore
      .collection<TodoModel>(`users/${this.user?.uid}/todos`, (ref) =>
        ref.orderBy('createdAt', 'desc')
      )
      .snapshotChanges()
      .pipe(
        map((querySnapshot) => {
          return querySnapshot.map((doc) => {
            const data = doc.payload.doc.data();

            const todo: TodoModel = {
              id: doc.payload.doc.id,
              text: data.text,
              done: data.done,
              createdAt: data.createdAt,
              updatedAt: data.updatedAt,
            };

            return todo;
          });
        })
      );
  }

  public async addTodo(todoTile: string) {
    await this.firestore
      .collection('users')
      .doc(this.user?.uid)
      .collection('todos')
      .doc(uuidV4())
      .set({
        title: todoTile,
        done: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
  }

  public async updateTodo(todo: TodoModel) {
    await this.firestore
      .collection('users')
      .doc(this.user?.uid)
      .collection("todos")
      .doc(todo.id)
      .update({
        done: !todo.done,
        updatedAt: serverTimestamp()
      });
  }

  public async deleteTodo(todo: TodoModel){
    await this.firestore
      .collection('users')
      .doc(this.user?.uid)
      .collection("todos")
      .doc(todo.id)
      .delete();
  }
}
