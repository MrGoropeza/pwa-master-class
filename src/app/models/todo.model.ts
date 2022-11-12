import { FieldValue } from "@angular/fire/firestore"; 

export interface TodoModel{
    id: string;
    text: string;
    done: boolean;
    createdAt: FieldValue;
    updatedAt: FieldValue;
}