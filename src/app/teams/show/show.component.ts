import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/core/Model/Team';
import { TeamService } from 'src/app/core/services/team.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  team!: Team;
  teamId!: number;
  constructor(private teamService: TeamService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = this.currentRoute.snapshot.params['id'];
    if (!id) {
      this.router.navigate(['/teams'])
    } else {
      this.teamId = id;
    }

    this.teamService.getTeamById(id).subscribe((team: any) => {
      this.team = team[0];
      this.teamId = team[0].id;
    });
  }

}
