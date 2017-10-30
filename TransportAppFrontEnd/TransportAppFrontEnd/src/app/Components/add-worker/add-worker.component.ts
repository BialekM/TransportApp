import { Component, OnInit } from '@angular/core';
import { WorkerService } from './../../services/worker.service';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css']
})
export class AddWorkerComponent implements OnInit {

  constructor(private WorkerService: WorkerService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    this.WorkerService.AddWorker(form.value);
  }

}
