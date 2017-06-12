import { Component } from '@angular/core';

import { Task } from './../../models/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent  {

    private tasks = [
        new Task(
            "Basic task",
            true
        ),
        new Task(
            "Advanced task",
            false
        )
    ];

}