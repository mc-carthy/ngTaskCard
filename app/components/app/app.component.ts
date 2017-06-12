import { Component } from '@angular/core';

import { Task } from './../../models/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent  {

    task1: Task = {
        content: "Test task",
        completed: false
    };
    
}