import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Member} from '../../../member/models/member';
import {MemberService} from './../../services/member.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  id: number | string;
  data: Member;

  constructor(
    private service: MemberService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');

    this.service.get(`profile/${this.id}`).subscribe((res) => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      this.data = <Member>res;
    });
  }

}
