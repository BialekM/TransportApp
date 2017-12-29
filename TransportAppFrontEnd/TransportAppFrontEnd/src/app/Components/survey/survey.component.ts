import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../Models/User';
import { Survey } from '../../Models/Survey';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey: Survey;
  id: string;
  surveyid: number;
  user: User;
  message = '';
  status = '';
  reviewWhenn = '';
  reviewFromm = '';
  buttonClicked = false;
  constructor(private workerService: WorkerService, private route: ActivatedRoute) {
    this.id = (this.route.snapshot.params['id']).toString();
    this.surveyid = +this.route.snapshot.params['surveyid'];
   }
  ngOnInit() {
    this.survey = new Survey();
    this.workerService.GetSurvey(this.id,this.surveyid).then(r=>{
      this.survey = r;
      this.reviewWhenn = r.reviewWhen.toString().substr(0,10);
      this.reviewFromm = r.reviewFrom.toString().substr(0,10);
    })
  }

  IsEmptyParam(parametr: string){
    if(parametr===undefined){
      return true;
    }else{
      return false;
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.survey = form.value;
      this.survey.surveyId = this.surveyid;
      this.survey.userId = this.id;
      this.workerService.AddSurvey(this.survey).then(r => {
        this.message = r.message;
        this.status = r.status;
      });
    }else {
      return;
    }
  }
ButtonClicked() {
  this.buttonClicked = true;
}
}
