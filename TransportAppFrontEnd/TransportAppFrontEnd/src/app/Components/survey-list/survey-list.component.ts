import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../../services/worker.service';
import { Survey } from '../../Models/Survey';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  constructor(private workerService: WorkerService,private route: ActivatedRoute) { }
  id: string;
  surveyList: Survey[];
  message: string;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.workerService.GetSurveys(this.id).then(r => {
      this.surveyList = r;
    });
  }

  DateAregood(i: number) {
    const ReviewFrom = new Date(this.surveyList[i].reviewFrom).valueOf();
    const Today = Date.now().valueOf();
    const diffReviewFrom = Math.ceil((ReviewFrom - Today) / (1000 * 3600 * 24));
    if((diffReviewFrom < 30 && diffReviewFrom > - 30)) {
      this.message = 'Do konca waznosci badania pozostało ' + diffReviewFrom + ' dni. ';
      return true;
    }else{
      return false;
    }
  }
  DeleteSurvey(i){  
  }

}
