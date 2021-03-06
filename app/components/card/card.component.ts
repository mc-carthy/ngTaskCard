import { Component, Input } from '@angular/core';

import { Task } from './../../models/task';


@Component({
    moduleId: module.id,
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.css' ]
})

export class CardComponent {

    @Input() task: Task;
    private hidden: boolean = false;

    statusToggle()
    {
        this.task.completed = !this.task.completed;
    }

    hideCard()
    {
        this.hidden = true;
    }

}