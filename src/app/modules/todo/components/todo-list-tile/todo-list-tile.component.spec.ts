import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTileComponent } from './todo-list-tile.component';

describe('TodoListTileComponent', () => {
  let component: TodoListTileComponent;
  let fixture: ComponentFixture<TodoListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
