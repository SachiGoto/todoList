import { Component, OnInit } from '@angular/core';
import{List} from './todo.interface';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private myhttp:HttpClient) { }


  todoList:List[]=[];

  // userId:string='123';
  // id:string='1';
  // title:string='hello';
  // complete:boolean=false;

  // id:number='';
  // title:string='';y

  // completed:boolean;





  ngOnInit(): void {

        this.myhttp.get<List[]>(this.url).subscribe(response=>{
          this.todoList = response;
        })

  }

}
